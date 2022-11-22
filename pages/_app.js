// import "../styles/globals.css";
import styles from "../styles/app.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.app}>
      <MoralisProvider initializeOnMount={false}>
        <NotificationProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </NotificationProvider>
      </MoralisProvider>
    </div>
  );
}

export default MyApp;
