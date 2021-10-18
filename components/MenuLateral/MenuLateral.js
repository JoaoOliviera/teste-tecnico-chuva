import styles from "./styles.module.scss";
import { useState } from "react";

export default function MenuLateral() {
  // react: define estado para menu lateral
  // estado inicial e apresentacao
  const [selectedPage, setSelectedPage] = useState("apresentacao");

  return (
    <section className={styles.MenuLateral}>
      <div className="slaca-container">
        <h1 className="title">SLACA 2019</h1>
      </div>
      <div className="image-container"></div>
      <nav className="navegation-container">
        <ul className="navegation">
          {/* verifica se o link atual e igual a pagina atual e define ele como selecionado */}
          {/* caso a pag for selecionada então select se não ""*/}
          <li className={`item ${selectedPage == "apresentacao" ? "selected" : ""}`}>
            <a className="link" onClick={() => setSelectedPage("apresentacao")}>
              Apresentação
            </a>
          </li>
          <li className={`item ${selectedPage == "comites" ? "selected" : ""}`}>
            <a className="link" onClick={() => setSelectedPage("comites")}>
              Comitês
            </a>
          </li>
          <li className={`item ${selectedPage == "autores" ? "selected" : ""}`}>
            <a className="link" onClick={() => setSelectedPage("autores")}>
              Autores
            </a>
          </li>
          <li
            className={`item ${
              selectedPage == "eixos-tematicos" ? "selected" : ""
            }`}
          >
            <a
              className="link"
              onClick={() => setSelectedPage("eixos-tematicos")}
            >
              <nobr>Eixos temáticos</nobr>
            </a>
          </li>
          <li
            className={`item ${selectedPage == "trabalhos" ? "selected" : ""}`}
          >
            <a className="link " onClick={() => setSelectedPage("trabalhos")}>
              Trabalhos
            </a>
          </li>
          <li className={`item ${selectedPage == "contato" ? "selected" : ""}`}>
            <a className="link" onClick={() => setSelectedPage("contato")}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
