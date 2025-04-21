import styles from "../styles/Home.module.css";
import VideoBackground from "../components/VideoBackground";
import PorQueNoirHouse from "../components/PorQueNoirHouse";
import QuoteNoirHouse from "components/QuoteNoirHouse";
import ModelsSection from "components/ModelsGrid";
import FAQ from "components/Faq";
import CallToAction from "components/CallToAction";
import Footer from "components/Footer";



export default function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.h1}>El lujo es para quien se atreve.</h1>
          <p className={styles.p}>
            En Noir House, gestionamos tu carrera y potenciamos tu presencia
            multiplataforma con estrategias exclusivas y personalizadas.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primary}>Únete a Noir House</button>
            <button className={styles.secondary}>Servicios</button>
          </div>
        </div>
      </section>

      <div className={styles.videoWrapper}>
        <VideoBackground />
      </div>
      <PorQueNoirHouse />
      <QuoteNoirHouse/>
      <ModelsSection/>
      <FAQ/>
      <CallToAction/>
      <Footer/>



    </div>
  );
}
