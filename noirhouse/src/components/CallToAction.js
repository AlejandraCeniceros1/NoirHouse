"use client";
import styles from "../styles/CallToAction.module.css";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className={styles.cta}>
      <h2 className={styles.title}>¿Lista para maximizar tu potencial?</h2>
      <div className={styles.buttons}>
        <Link href="/join">
          <button className={styles.primary}>Únete a Noir House</button>
        </Link>
        <Link href="/contacto">
          <button className={styles.secondary}>Contáctanos</button>
        </Link>
      </div>
    </section>
  );
}
