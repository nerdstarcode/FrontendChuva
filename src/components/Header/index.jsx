import './Header.sass';
import { SideBarMobile } from '../Side_bar_mobile/index'

export function Header(){
    return(
        <div className="miss-sm header grid-12">
            <header className="grid-12">
                
                <div className="description grid-9 ">
                    <p className="simple_text">Anais do Simpósio Latino Americano de Ciências de Alimentos</p>
                    <p className="title">Anais do 13º Simpósio Latino Americano de Ciência de Alimentos</p>
                    <p className="simple_text">ISSN: 1234-5678</p>
                </div>
                <div className="lenguage grid-1 grid-2-md"></div>
                <div className="user grid-5 ">
                    <div className="user_text grid-9">
                        <p className="user_greatings">Bem-vindo!</p>
                        <p className="user_email">sthivendev@galoasience.com</p>
                    </div>
                    <div className="user_photo grid-3 grid-4-md">
                        <div className="img grid-8"></div>
                        {/* <img className="grid-9" src="user" alt="foto de usuário" srcSet={`${user} 612w, ${user} 768w, ${user} 1280w`} /> */}
                    </div>
                </div>

            </header>
            {/* <div className="grid-0 miss-md grid-12-sm">
                    <SideBarMobile/>
            </div> */}
        </div>
        
    );
}