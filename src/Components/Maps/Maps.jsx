// src/components/MapaEventos.jsx
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import s from "./maps.module.scss";

// Corrige o bug dos ícones padrão do Leaflet (sem isso, o marcador não aparece) 
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const containerStyle = {
  width: "100%",
  height: "500px",
};

// 🔄 Componente auxiliar para mover o mapa até a posição atual
function AtualizarCentro({ posicao }) {
  const map = useMap();
  useEffect(() => {
    if (posicao) {
      map.setView(posicao, 13);
    }
  }, [posicao, map]);
  return null;
}

export default function Maps({ filtroDias = 0 }) {
  const [posicaoAtual, setPosicaoAtual] = useState(null);
  const [enderecos, setEnderecos] = useState([]);
  const [marcadores, setMarcadores] = useState([]);
  const [ativo, setAtivo] = useState(null);

  // 📍 Obter posição atual
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          setPosicaoAtual({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          }),
        (err) => console.error("Erro ao obter localização:", err)
      );
    }
  }, []);

  // APENAS EVENTOS FUTUROS FILTRADOS POR FILTRO DIAS
  useEffect(() => {
    const buscarEnderecos = async () => {
      try {
        const response = await axios.get(
          "https://api-uhuuu.onrender.com/cadastrados_eventos"
        );
        const eventos = response.data;
        const agora = new Date();
        const limite = new Date();
        limite.setDate(limite.getDate() + filtroDias);

        // 🔹 Filtra eventos entre hoje e a data limite
        const eventosFiltrados = eventos.filter((evento) => {
          if (!evento.dataHoraInicio || !evento.dataHoraFim) return false;
          const inicio = new Date(evento.dataHoraInicio);
          const fim = new Date(evento.dataHoraFim);
          return fim >= agora && inicio <= limite; // dentro do intervalo
        });

        const enderecosFormatados = eventosFiltrados.map((evento) => ({
          id: evento.id || evento.nome,
          nome: evento.nome,
          enderecoCompleto: [
            evento.logradouro,
            evento.numero,
            evento.complemento,
            evento.bairro,
            evento.cidade,
            evento.estado,
          ]
            .filter(Boolean)
            .join(", "),
        }));

        setEnderecos(enderecosFormatados);
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
      }
    };

    buscarEnderecos();
  }, [filtroDias]); // 🔹 Recarrega ao trocar o filtro

  // 🌍 Geocodificar endereços usando Nominatim (serviço gratuito do OSM)
useEffect(() => {
  const geocodificar = async () => {
    if (enderecos.length === 0) return;

    const promises = enderecos.map(async (evento) => {
      try {
        const endereco = evento.enderecoCompleto;

        // 🚀 Usa o proxy allorigins para evitar erro de CORS
        const res = await axios.get(
          `https://api.allorigins.win/raw?url=${encodeURIComponent(
            `https://nominatim.openstreetmap.org/search?` +
              `q=${encodeURIComponent(endereco)}&format=json&addressdetails=1&limit=1`
          )}`
        );

        if (res.data && res.data.length > 0) {
          const { lat, lon } = res.data[0];
          return {
            id: evento.id,
            nome: evento.nome,
            endereco: evento.enderecoCompleto,
            position: { lat: parseFloat(lat), lng: parseFloat(lon) },
          };
        } else {
          console.warn("Endereço não encontrado:", evento.enderecoCompleto);
          return null;
        }
      } catch (error) {
        console.error("Erro ao geocodificar:", evento.enderecoCompleto, error);
        return null;
      }
    });

    const resultados = await Promise.all(promises);
    setMarcadores(resultados.filter((m) => m !== null));
  };

  geocodificar(); // <-- chamada correta da função
}, [enderecos]);


  if (!posicaoAtual) return <p>Carregando mapa...</p>;

  return (
    <MapContainer
      center={posicaoAtual}
      zoom={13}
      style={containerStyle}
      scrollWheelZoom={true}
      className={s.mapContainer}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
      />

      {/* Atualiza o centro do mapa conforme localização */}
      <AtualizarCentro posicao={posicaoAtual} />

      {/* 📍 Marcador da posição atual */}
      <Marker
        position={posicaoAtual}
        icon={L.icon({
          iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          iconSize: [32, 32],
          iconAnchor: [16, 32],
        })}
      >
        <Popup>📍 Você está aqui</Popup>
      </Marker>

      {/* 📌 Marcadores dos eventos */}
      {marcadores.map((m) => (
        <Marker
          key={m.id}
          position={m.position}
          eventHandlers={{
            click: () => setAtivo(m),
          }}
          icon={L.icon({
            iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
            iconSize: [32, 32],
            iconAnchor: [16, 32],
          })}
        />
      ))}

      {/* 💬 Popup ativo */}
      {ativo && (
        <Popup position={ativo.position} onClose={() => setAtivo(null)}>
          <div style={{ maxWidth: "200px" }}>
            <h4 style={{ marginBottom: "4px" }}>{ativo.nome}</h4>
            <p style={{ fontSize: "0.9em", margin: 0 }}>{ativo.endereco}</p>
          </div>
        </Popup>
      )}
    </MapContainer>
  );
}
