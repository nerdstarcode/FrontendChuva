import './SideBarMobile.sass';


export function SideBarMobile(){
    return(
        <div className="side_bar_mobile grid-12">
            <nav className="side_bar_mobile active grid-12">
                <div className="event_info grid-6"> 
                    <div className="event_name grid-12">
                        SLACA 2019
                    </div>
                </div>
                <div className="menu grid-6">
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