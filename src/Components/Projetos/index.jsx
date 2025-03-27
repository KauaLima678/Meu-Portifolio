import style from './style.module.css';
import Hamburgueria from '../../Imgs/Hamburgueria.png';
import Jojo from '../../Imgs/Jojo.png';
import Spotify from '../../Imgs/Spotify.png';

export default function Projetos() {

    return(
        <section className={style.projetos} id='projetos'>
        <h2 className={style.title}>Projetos</h2>

        <div className={style.gradeProjetos}>
            <div className={style.cardProjeto}>
                <img src={Hamburgueria} alt="" className={style.imgProjeto}/>
                <div className={style.infoProjeto}>
                    <h3>Sr. Burguer</h3>
                    <p>Projeto de fim de ano feito em php com funcionalidades de login, cadastro, atualizar pedidos e muito mais.</p>
                    <a href="https://github.com/KauaLima678/Sr.-Burguer-Hamburgueria"  target="_blank" rel="noopener noreferrer">Ver projeto <span>→</span></a>
                </div>
            </div>
            <div className={style.cardProjeto}>
                <img src={Jojo} alt="" className={style.imgProjeto}/>
                <div className={style.infoProjeto}>
                    <h3>Jojo Page</h3>
                    <p>Minha primeira interface Desenvolvida em React js, colocando em prática meus conhecimentos adquiridos.</p>
                    <a href="https://projeto-jojo-react-mgd3ds9az-kaua-limas-projects-bac59c0b.vercel.app/"  target="_blank" rel="noopener noreferrer">Ver projeto →</a>
                </div>
            </div>
            <div className={style.cardProjeto}>
                <img src={Spotify} alt="" className={style.imgProjeto}/>
                <div className={style.infoProjeto}>
                    <h3>Interface Spotify</h3>
                    <p>Interface Desenvolvida em React Js para por em prática meus conhecimentos sobre Componentização. Está não é uma página Funcional.
                    </p>
                    <a href="https://projeto-react-spotify.vercel.app"  target="_blank" rel="noopener noreferrer">Ver projeto →</a>
                </div>
            </div>
        </div>
    </section>
    );

}