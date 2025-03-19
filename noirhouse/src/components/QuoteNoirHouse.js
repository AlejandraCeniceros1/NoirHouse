import styles from "../styles/QuoteNoirHouse.module.css";

export default function QuoteNoirHouse() {
  return (
    <section className={styles.container}>
      {/* Imagen en blanco y negro a la izquierda */}
      <div className={styles.imageContainer}>
        <img
          src="/images/noir-bn.png"
          alt="Noir House Experience"
          className={styles.bnwImage}
        />
      </div>

      {/* Cuadro de testimonio */}
      <div className={styles.testimonial}>
        <p className={styles.quote}>“</p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Sit adipiscing in vel netus et. 
          Pharetra tincidunt eget ut habitant feugiat. Id ac est iaculis tellus amet. 
          Urna sit et sit nisl.
        </p>
        <p className={styles.author}><strong>JUANA MARIA</strong>, OnlyFans Content Creator</p>
      </div>
    </section>
  );
}
