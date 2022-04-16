import './HeaderMobile.sass';
import { SideBarMobile } from '../Side_bar_mobile/index'

export function Header_mobile(){
    return(
        <div className="header see-sm miss grid-12-sm">
            <header className="grid-12-sm">
                <div className="lenguage grid-2-sm">

                </div>
                <div className="event grid-6-sm">
                    <p>SLACA 2019</p>
                </div>
                <div className="lenguage user grid-4">
                </div>

            </header>
            <div className="grid-12-sm">
                    <SideBarMobile/>
            </div>
        </div>
        
    );
}