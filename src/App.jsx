import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projetos from "./Components/Projetos";
import Sobre from "./Components/Sobre";
import Contato from "./Components/Contato";
import { useEffect } from "react";

function App() {

  useEffect(() => {

    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    })

  },)

  return (
    <>
      <Header />
      <Home />
      <Projetos />
      <Sobre />
      <Contato />
      <footer>
        <p>© 2025 <a href="https://github.com/KauaLima678">Kauã Lima</a>. Todos os direitos reservados.</p>
      </footer>

      <div className="cursor"></div>
    </>
  );
}

export default App;
