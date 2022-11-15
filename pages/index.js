import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import MiddleSection from "../components/Middle-Section/MiddleSection";

export default function Home() {
  return (
    <div className={`${styles.home}`}>
      <Header />
      <MiddleSection />
    </div>
  );
}
