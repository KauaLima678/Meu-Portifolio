import style from './style.module.css';
import Logo from '../../Imgs/Logo.png';

export default function Header (){


    return(
        <header>
        <div className={style.logo}>
            <img src={Logo} alt="Logo" />
        </div>
        <div className={style.menu}>
            <nav>
                <a href="#home">Home</a>
            <a href="#projetos">Projetos</a>
            <a href="#sobre">Sobre mim</a>
            <a href="#contato">Contato</a>
            </nav>
            </div>
        
        <div className={style.contact}>
            <a className={style.btn} href="">Fale comigo</a>
        </div>
    </header>   
    );

}