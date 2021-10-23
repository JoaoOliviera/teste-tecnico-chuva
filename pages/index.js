import styles from "../styles/pages/index/styles.module.scss";
import { MenuLateral, Header, Body} from "../components";

export default function Home() {
  return (
    <>
      <section className={styles.Index}>
        <div className="menulateral-container">
          <MenuLateral />
        </div>
        <div className="conteudo-container">
          <Header />
          <Body />
        </div>
      </section>
      
    </>
  );
}
