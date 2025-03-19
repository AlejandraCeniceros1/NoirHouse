import styles from "../styles/PorQueNoirHouse.module.css";

export default function PorQueNoirHouse() {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>¿Por qué Noir House?</h2>
        <p className={styles.subtitle}>Experiencia premium y personalizada.</p>
        <p className={styles.subtitle}>Estrategias avanzadas de branding.</p>
        <p className={styles.subtitle}>
          Gestión integral para maximizar tus ingresos.
        </p>
      </div>

      <div className={styles.imageContainer}>
        <img
          src="/images/noir-color.png"
          alt="Noir House Experience"
          className={styles.colorImage}
        />
      </div>
    </section>

    
  );
}
