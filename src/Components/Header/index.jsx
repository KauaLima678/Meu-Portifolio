import style from './style.module.css';
import Logo from '../../Imgs/Logo.png';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

export default function Header (){

    const [menuLateral, setMenuLateral] = useState(false);
  const [fechandoMenu, setFechandoMenu] = useState(false);

  const abrirMenu = () => {
    setMenuLateral(true);
    setFechandoMenu(false);
  };

  const fecharMenu = () => {
    setFechandoMenu(true);
    setTimeout(() => {
      setMenuLateral(false);
    }, 500); // espera a animação de fechamento
  };


    return(
        <header className={style.header}>
            <FaBars className={style.bars} color="#fff" size={24} onClick={abrirMenu} />
        <div className={style.logo}>
            <img src={Logo} alt="Logo" />
        </div>
        <div className={style.menu}>
            <nav className={style.nav}>
                <a href="#home">Home</a>
            <a href="#projetos">Projetos</a>
            <a href="#sobre">Sobre mim</a>
            <a href="#contato">Contato</a>
            </nav>
            </div>
        
        <div className={style.contact}>
            <a className={style.btn} href="#contato">Fale comigo</a>
        </div>

        {menuLateral && (
            <div className={style.overlayMenu} onClick={fecharMenu}>
                <div className={`${style.menuLateral} ${fechandoMenu ? style.menuLateralClose : ''}`}
            onClick={(e) => e.stopPropagation()}>
                    <div className={style.head}>
                    <h1>Menu</h1>
                    <IoCloseSharp onClick={fecharMenu} />
                    </div>
                    <nav className={style.navLateral}>
                        <a href="#home" onClick={fecharMenu}>Home</a>
                        <a href="#projetos" onClick={fecharMenu}>Projetos</a>
                        <a href="#sobre" onClick={fecharMenu}>Sobre mim</a>
                        <a href="#contato" onClick={fecharMenu}>Contato</a>
                    </nav>
                    <div className={style.contactLateral}>
                        <a className={style.btnLateral} href="#contato">Fale comigo</a>
                    </div>
                </div>
            </div>
        )}
    </header>   
    );

}