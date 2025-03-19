import styles from "../styles/Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>El lujo es para quien se atreve.</h1>
      <p className={styles.subtitle}>
        En Noir House, gestionamos tu carrera y potenciamos tu presencia multiplataforma con estrategias exclusivas y personalizadas.
      </p>
      <div className={styles.buttons}>
        <Link href="/join" className={styles.primaryButton}>Únete a Noir House</Link>
        <Link href="/services" className={styles.secondaryButton}>Servicios</Link>
      </div>
    </section>
  );
}
