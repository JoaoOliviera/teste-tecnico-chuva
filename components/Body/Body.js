import styles from "./styles.module.scss";
import { AiOutlineDownload } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { FaHandHolding } from "react-icons/fa";
import { SiWechat } from "react-icons/si";
import { BsPeopleFill } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
import { BiHeartSquare } from "react-icons/bi";
import { BsPlayCircleFill } from "react-icons/bs";


export default function Body() {
  return (
    <header className={styles.Body}>
      <div className="title-container">
        <h1 className="title">
          Análise sensorial de preparações funcionais desenvolvidas para
          escolares
          <br />
          entre 09 e 15 anos, do município de Campinas/SP
        </h1>
        <div className="button-menu">
          <div className="dowload">
            <AiOutlineDownload className="dowload-incon" /> Dowload
          </div>
          <div className="favorite-button">
            <BsFillStarFill className="favorite-incon" />
          </div>
          <div className="doi-button">
            <div className="doi-incon">doi</div>
          </div>
          <div className="how-button">
            <div className="how-incon">COMO CITAR ESSE TRABALHO?</div>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="movie">
          <h1 className="movie-title">
            Análise sensorial de preparações funcionais desenvolvidas para
            escolares entre 09 e 15 anos, do município de Campinas/SP
          </h1>
          <BsPlayCircleFill className="play-incon" />
          <div className="footer-movie">
            <div className="movie-image"></div>
            <div className="author">
              <h1 className="author-name">Beatriz Christiane Melo</h1>
              <p className="institution">FCA / Universidade Estadual de Campinas</p>
            </div>
          </div>
        </div>
        <div className="details-container">
          <h1 className="details-title">Detalhes</h1>
          <div className="details-box">
            <p className="apresentation">
              Tipo de Apresentação: <b>Pôster</b> Eixo temático: Alimentação e
              saúde (AS) Palavras-chaves: Alimentos funcionais, alimentação
              escolar.
            </p>
            <p className="authors">
              Autores: Galileo Galilei¹ Berta Lange de Morretes² Isaac Newton³
              Cesar Lattes¹ Stephen Hawking⁴
            </p>
            <p className="institutions">
              ¹Universidade Estadual de Campinas ²Universidade de São Paulo
              ³Instituto Nacional de Pesquisas Espaciais ⁴Universidade Federal
              do Rio de Janeiro
            </p>
          </div>
        </div>
      </div>
      <section className="abstract-container">
        <div className="abstract-title">
          <h1>Resumo</h1>
        </div>
        <div className="abstract">
          <p className="abstract-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus
            felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce
            auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl,
            vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut
            viverra lorem vestibulum ut. Phasellus condimentum orci id leo
            condimentum lobortis et non lorem. Sed id nisl metus. Quisque
            sollicitudin ligula in sapien scelerisque, ac gravida eros
            vestibulum Phasellus condimentum orci id leo condimentum lobortis et
            non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien
            scelerisque, ac gravida eros vestibulum. Etiam aliquam dictum nisl ,
            vel aliquet enim accumsan sit ametl accumsant... <p>ver mais</p>
          </p>
        </div>
      </section>
      <section className="share-container">
        <div className="share-title">Discussões</div>
        <div className="share">
          <h1 className="share-text">
            Compartilhe suas ideias ou dúvidas com os autores!
          </h1>
        </div>
        <div className="share-buttons">
          <FaHandHolding className="hand-incon" />
          <SiWechat className="chat-incon" />
          <BsPeopleFill className="people-incon" />
        </div>
        <div className="shared-text-container">
          <p className="shared-text">
            Sabia que o maior estímulo no desenvolvimento científico e cultural
            é a curiosidade? Deixe seus questionamentos ou sugestões para o
            autor!
          </p>
          <div className="new-topic">+ criar tópico</div>
        </div>
        <div className="comments-container">
          <div className="comments-items">
            <h2 className="subject-title">Assunto da pergunta aparece aqui</h2>
            <p className="name">Carlos Henrique Santos</p>
            <p className="question">
              Comecinho da pergunta aparece aqui resente relato inscreve-se no
              campo da análise da dimensão e impacto de processo formativo
              situado impacto de processo formativo processo...
            </p>
            <div className="comments-incons">
              <FiMoreVertical className="more-incon" />
              <BiHeartSquare className="like-incon" />
              <p className="likes-counter">1 like</p>
              <p className="answers-counter">1 resposta</p>
            </div>
          </div>

          <div className="comments-items">
            <h2 className="subject-title">Assunto da pergunta aparece aqui</h2>
            <p className="name">Carlos Henrique Santos</p>
            <p className="question">
              Comecinho da pergunta aparece aqui resente relato inscreve-se no
              campo da análise da dimensão e impacto de processo formativo
              situado impacto de processo formativo processo...
            </p>
            <div className="comments-incons">
              <FiMoreVertical className="more-incon" />
              <BiHeartSquare className="like-incon" />
              <p className="likes-counter">1 like</p>
              <p className="answers-counter">1 resposta</p>
            </div>
          </div>
          <div className="footer-container"></div>
        </div>
      </section>
    </header>
  );
}
