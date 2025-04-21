"use client";
import { useState } from "react";

import styles from "../styles/FAQ.module.css";

const faqData = [
  {
    question: "¿Cómo puedo unirme a Noir House?",
    answer: "Dirígete a la sección Join Us en nuestra página y completa el formulario. Nuestro equipo evaluará tu perfil y se pondrá en contacto contigo.",
  },
  {
    question: "¿Cuál es la diferencia entre los esquemas Gamma, Beta y Alfa?",
    answer: "Gamma es para quienes inician, Beta ofrece acompañamiento parcial, y Alfa es el servicio más completo y exclusivo con branding personalizado.",
  },
  {
    question: "¿Cuánto puedo ganar vendiendo contenido?",
    answer: "Nuestros modelos más constantes generan desde $1,000 USD al mes. Con disciplina y contenido exclusivo, tus ingresos pueden escalar rápidamente.",
  },
  {
    question: "¿Cuántas horas debo dedicar al día?",
    answer: "Depende de tu esquema, pero en promedio recomendamos al menos 2 a 4 horas diarias para responder mensajes, grabar contenido y mantener la interacción.",
  },
  {
    question: "¿Cómo puedo comenzar?",
    answer: "Haz clic en 'Join' en la parte superior, llena tu formulario y espera a que nuestro equipo te contacte para una entrevista.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(i === openIndex ? null : i);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>Frequently asked Questions</h2>
      <div className={styles.list}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.question} onClick={() => toggle(index)}>
              <span>{openIndex === index ? "-" : "+"}</span> {item.question}
            </div>
            {openIndex === index && <p className={styles.answer}>{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
