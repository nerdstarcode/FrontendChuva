import './SideBar.sass';
import medium from '../../assets/img/menu_logo.png';
import large from '../../assets/img/menu_logo.png';
import small from '../../assets/img/menu_logo.png';


export function SideBar(){
    return(
        <div className="side_bar grid-12">
            <nav className="side_bar grid-12">
                <div className="Top grid-12"> 
                    <div className="nome_evento grid-12">
                        SLACA 2019
                    </div>
                </div>
                <img className="grid-12" src="small" alt="Logo da empresa" srcSet={`${small} 612w, ${medium} 768w, ${large} 1280w`} />
                <div className="menu grid-12">
                    <ul>
                        <li className="menu-item">          <a> Apresentação    </a>     </li>
                        <li className="menu-item">          <a> Comitês         </a>     </li>
                        <li className="menu-item">          <a> Autores         </a>     </li>
                        <li className="menu-item">          <a> Eixos temáticos </a>     </li>
                        <li className="menu-item active">   <a> Trabalhos       </a>     </li>
                        <li className="menu-item">          <a> Contato         </a>     </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}