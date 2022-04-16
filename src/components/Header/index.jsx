import './Header.sass';
import { SideBarMobile } from '../Side_bar_mobile/index'
import language from '../../assets/img/language_icon.png'
export function Header(){
    return(
        <div className="miss-sm header grid-12">
            <header className="grid-12">
                <div className="description grid-7 ">
                    <p className="simple_text">Anais do Simpósio Latino Americano de Ciências de Alimentos</p>
                    <p className="title">Anais do 13º Simpósio Latino Americano de Ciência de Alimentos</p>
                    <p className="simple_text">ISSN: 1234-5678</p>
                </div>
                <div className="language grid-1 grid-1-lg grid-1-md">
                    <div className="border">
                        <label className="language_current" htmlFor="language">
                        </label>
                        <img className="language_img grid-3" src="language" srcSet={`${language}`}></img>
                        <select className="language_select grid-9" id="language">
                            <option value="PT, BR">PT-BR</option>
                        </select>
                    </div>
                </div>
                <div className="user grid-4 grid-4-lg">
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