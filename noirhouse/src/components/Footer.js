"use client";
import styles from "../styles/Footer.module.css";
import { FaEnvelope, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>

        {/* IZQUIERDA: Logo y contacto */}
        
        <div className={styles.brand}>
            <div className={styles.logoRow}>
            <img src="/imago.svg" width={40} height={40} alt="Logo Noir House" />
            <span className={styles.logoText}>NOIR · HOUSE</span>
        </div>

        


          <p className={styles.slogan}>El lujo es para quien se atreve.</p>
          <div className={styles.contact}>
            <p><FaEnvelope /> noirhouseglobal@gmail.com</p>
            <p><FaXTwitter /> @noirhouseglobal</p>
            <p><FaInstagram /> @weare.noirhouse</p>
            <p><FaFacebookF /> @wearenoirhouse</p>
          </div>
        </div>

        {/* CENTRO: Navegación */}
        <div className={styles.nav}>
          <p>Inicio</p>
          <p>Nosotros</p>
          <p>Modelos</p>
          <p>Join us</p>
          <p>Log in</p>
          <p>FAQ</p>
        </div>

        {/* DERECHA: Formulario */}
        <div className={styles.form}>
          <h3>Solicita un Photoshoot ahora</h3>
          <input type="text" placeholder="Nombre completo" />
          <input type="email" placeholder="Correo electrónico" />
          <input type="text" placeholder="País" />
          <button>Enviar</button>
        </div>
      </div>
    </footer>
  );
}
