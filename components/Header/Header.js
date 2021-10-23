import styles from "./styles.module.scss";
import { GrLanguage } from "react-icons/gr";
import { RiArrowDownSFill } from "react-icons/ri";

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className="title-container">
        <p className="text01">
          Anais do Simpósio Latino Americano de Ciências de Alimentos{" "}
        </p>
        <h1 className="title">
          Anais do 13º Simpósio Latino Americano de Ciência de Alimentos{" "}
        </h1>
        <p className="subtitle">ISSN: 1234-5678</p>
      </div>
      <div className="language-selector-container">
        <div className="language-selector">
          <GrLanguage className="icon-language" />
          <div className="language">pt-BR</div>
          <RiArrowDownSFill className="icon-language" />
        </div>
      </div>
      <div className="user-profile-container">
        <div className="user-profile">
          <p className="text04">
            <nobr>Bem vindo!</nobr>
          </p>
          <p className="user-email">alguem12@galoascience.com</p>
        </div>
      </div>
    </header>
  );
}
