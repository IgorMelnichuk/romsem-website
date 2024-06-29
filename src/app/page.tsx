import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";
import Promo from "../components/Promo/Promo.jsx";
import Cards from "../components/Cards/Cards.jsx";
import Footer from "../components/Footer/Footer.jsx"
import Leftside from "../components/Leftside/Leftside.jsx"
import Rightside from "../components/Rightside/Rightside.jsx"
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Main />
      <Promo />
      <Cards />
      <Footer />
      <Leftside />
      <Rightside />
    </main>
  );
}
