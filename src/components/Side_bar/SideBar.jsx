import '../../DefaultSass/grid.sass';
import './SideBar.sass';

export function SideBar(){
    return(
        <nav className="side_bar grid-3">
            <div className="Top grid-12"> 
                <div className="nome_evento grid-12">
                    SLACA 2019
                </div>
            </div>
        </nav>
    );
}