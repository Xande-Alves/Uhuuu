import s from './sideNavbar.module.scss';
import { Link } from 'react-router-dom';

export default function SideNavbar() {
    return (
        <section className={s.sideNavbar}>
            <h1>Vamos encontrar o seu rolê?</h1>  
            <nav>
                <ul>
                    <li><Link className={s.linkSidenav} to='/BuscaCompleta'>Busca Completa</Link></li>
                    <li><Link className={s.linkSidenav} to='/PertoDeVoce'>Perto de você</Link></li>
                    <li><Link className={s.linkSidenav} to='/PorCategorias'>Por categorias</Link></li>
                    <li><Link className={s.linkSidenav} to='/SeusRoles'>Seus Rolês</Link></li>
                </ul>
            </nav>
        </section>
    )
}