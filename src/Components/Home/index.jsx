import { useEffect } from 'react';
import style from './style.module.css'
import Logo from '../../Imgs/Lima Logo.png'

export default function Home (){

    useEffect(() => {
        const text = ["Desenvolvedor Front-End", "UX/UI Designer", "React Js", "CSS3", "HTML5", "JavaScript", "MySQL", "Php"];
    
        let index = 0;
        let isDeleting = false;
        let textIndex = 0;
        let speed = 100;
    
        const typeRight = () => {
          const typeright = document.getElementById("typingRight");
          if (!typeright) return; // Garante que o elemento existe antes de modificar
    
          const currentText = text[textIndex];
    
          if (!isDeleting && index <= currentText.length) {
            typeright.textContent = currentText.substring(0, index);
            index++;
            speed = 100;
          } else if (isDeleting && index >= 0) {
            typeright.textContent = currentText.substring(0, index);
            index--;
            speed = 90;
          }
    
          if (index > currentText.length) {
            isDeleting = true;
          }
    
          if (index === 0 && isDeleting) {
            isDeleting = false;
            textIndex = (textIndex + 1) % text.length; // Alterna entre os textos
          }
    
          setTimeout(typeRight, speed);
        };
    
        typeRight(); 
    
      }, []);

    return(
      <section className={style.Home}>
          <div className={style.typing} id="typingRight"><span></span></div>
        <div className={style.info} id='home'>
            <h1>Olá! Me chamo <span>Kauã Lima</span></h1>
            <p> Sou um desenvolvedor Criativo e empenhado a construir interfaces web incríveis, apaixonado por
                tecnologia e por criar coisas novas. Estou sempre em busca de solucionar problemas, novos desafios e oportunidades para
                aprimorar minhas habilidades. </p>
            <a className={style.buttonProj} href="https://github.com/KauaLima678" target="_blank" rel="noopener noreferrer">Veja mais</a>
        </div>
        <img src={Logo} alt="" className={style.logo} />
    </section>
    );

}