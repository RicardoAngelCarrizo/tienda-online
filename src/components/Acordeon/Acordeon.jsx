import React from "react";
import "./Acordeon.css";

export const Acordeon = () => {
  return (
    <>
      <section>
        <details>
          <summary>¿Qué es Skala y para que sirve?</summary>
          <p>Elimina el frizz, hidrata, da vida al cabello opaco.</p>
        </details>

        <details>
          <summary>¿Cuántos tipos de Skala hay?</summary>
          <ul>
            <li>Tratamientos Skala Para Cabello Rizado o Afro.</li>
            <li>Tratamiento Skala Mais Cachos.</li>
            <li>Tratamiento Skala Divino Potao.</li>
            <li>Tratamiento Mais Crespos.</li>
            <li>Tratamiento Skala Babosa 2 en 1.</li>
            <li>Tratamientos Skala para cabello liso.</li>
            <li>Tratamiento Skala Mais Lisos 2 en 1.</li>
          </ul>
        </details>

        <details>
          <summary>¿Cómo se usa el tratamiento Skala?</summary>
          <p>
            Masajee suavemente el cuero cabelludo con las puntas de los dedos
            como si fuera un champú convencional. Enjuague. En seguida, adicione
            una cantidad del producto al largo de los cabellos y en las puntas,
            desenrede cuidadosamente sus cabellos con ayuda de sus dedos y
            enjuague.
          </p>
        </details>
      </section>
    </>
  );
};
