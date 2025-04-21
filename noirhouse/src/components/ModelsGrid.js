import styles from "../styles/ModelsGrid.module.css";

const models = [
  { src: "/videos/model13333.mp4", type: "video" },
  { src: "/videos/model2.mp4", type: "video" },
  { src: "/videos/model3.mp4", type: "video" },
  { src: "/videos/model4.mp4", type: "video" },
  { src: "/videos/model4.mp4", type: "video" },
  { src: "/videos/model4.mp4", type: "video" },
  { src: "/videos/model4.mp4", type: "video" },
  { src: "/videos/model4.mp4", type: "video" },
];

export default function ModelsSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>+65 Modelos y creadoras de contenido</h2>
      <button className={styles.viewAll}>Ver todas</button>

      <div className={styles.grid}>
        {models.map((model, index) => (
          <div key={index} className={styles.card}>
            {model.type === "video" ? (
              <video
                src={model.src}
                className={styles.media}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img src={model.src} alt="Modelo" className={styles.media} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
