import './Header.sass';

export function Header(){
    return(
        <div className="grid-10">
            <header className="grid-12">
                <div className="description grid-7">
                    <p className="simple_text">Anais do Simpósio Latino Americano de Ciências de Alimentos</p>
                    <p className="title">Anais do 13º Simpósio Latino Americano de Ciência de Alimentos</p>
                    <p className="simple_text">ISSN: 1234-5678</p>
                </div>
                <div className="lenguage grid-2"></div>
                <div className="user grid-3"></div>
            </header>
        </div>
        
    );
}