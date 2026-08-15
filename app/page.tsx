import type { Metadata } from "next";
import { MotionController } from "./MotionController";

export const metadata: Metadata = {
  title: "impres_3DS | Impresión 3D en Ciudad Madero",
  description:
    "Piezas 3D personalizadas, prototipos y producción en PLA, ABS, PETG y TPU.",
};

const quoteUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeK2j6hB0Zz_lmls1IJDx2ysLo7FGyfNj0Krd6MSIzcGKPlmw/viewform?usp=dialog";

const services = [
  ["01", "Prototipos", "Valida formas, ensambles y funcionamiento antes de invertir en producción."],
  ["02", "Piezas funcionales", "Componentes resistentes, soportes, carcasas y refacciones hechas para trabajar."],
  ["03", "Diseños únicos", "Figuras, regalos y objetos personalizados que no existen en un catálogo."],
  ["04", "Series cortas", "Produce pocas unidades con consistencia, sin moldes ni inversiones innecesarias."],
];

const materials = [
  ["PLA", "PRECISIÓN", "Acabado limpio, colores intensos y gran definición. Ideal para figuras, maquetas y prototipos visuales."],
  ["PETG", "EQUILIBRIO", "Resistente, durable y tolerante a la humedad. La opción versátil para piezas de uso real."],
  ["ABS", "RESISTENCIA", "Soporta golpes y temperatura. Recomendado para carcasas, herramientas y aplicaciones exigentes."],
  ["TPU", "FLEXIBILIDAD", "Elástico y resistente al desgaste. Perfecto para protectores, sellos, fundas y amortiguadores."],
];

const steps = [
  ["01", "Cuéntanos la idea", "Comparte tu modelo o explícanos qué necesitas fabricar."],
  ["02", "Ajustamos el archivo", "Revisamos medidas, material, orientación y viabilidad técnica."],
  ["03", "Imprimimos", "Producimos tu pieza con parámetros optimizados y control de calidad."],
  ["04", "Recibe tu pieza", "Coordinamos la entrega y confirmamos que el resultado sea el esperado."],
];

export default function Home() {
  return (
    <main>
      <MotionController />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="impres_3DS, inicio">
          <span>impres_3DS</span>
          <small>TALLER DE IMPRESIÓN</small>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#servicios">SERVICIOS</a>
          <a href="#materiales">MATERIALES</a>
          <a href="#proceso">PROCESO</a>
        </nav>
        <a className="header-cta" href={quoteUrl} target="_blank" rel="noreferrer">
          COTIZA TU PIEZA
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy hero-enter">
          <p className="eyebrow"><span /> IMPRESIÓN 3D EN CIUDAD MADERO</p>
          <h1>
            <span>IDEAS QUE</span>
            <span>SE VUELVEN</span>
            <span className="outline">OBJETOS.</span>
          </h1>
          <p className="hero-description">
            Fabricamos prototipos, piezas funcionales y diseños personalizados con
            materiales de alto desempeño y atención directa.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={quoteUrl} target="_blank" rel="noreferrer">
              PEDIR COTIZACIÓN <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#materiales">EXPLORAR MATERIALES ↓</a>
          </div>
        </div>

        <div className="hero-visual visual-enter" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="layer-stack">
            {Array.from({ length: 12 }, (_, index) => (
              <i key={index} style={{ "--layer": index } as React.CSSProperties} />
            ))}
          </div>
          <span className="visual-label">CAPA / CAPA / CAPA</span>
        </div>

        <div className="hero-meta">
          <span>FDM / DISEÑO / PRODUCCIÓN</span>
          <span>SCROLL ↓</span>
        </div>
      </section>

      <div className="ticker" aria-label="Servicios de impres_3DS">
        <div>
          PROTOTIPOS <b>●</b> PIEZAS FUNCIONALES <b>●</b> FIGURAS <b>●</b> REFACCIONES <b>●</b> SERIES CORTAS <b>●</b> DISEÑO A MEDIDA <b>●</b>
        </div>
      </div>

      <section className="section services" id="servicios">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">QUÉ FABRICAMOS</p>
          <h2>NO VENDEMOS<br /><span className="outline-text">PLÁSTICO.</span><br />RESOLVEMOS IDEAS.</h2>
          <p>Del primer boceto a una pieza lista para usar. Cada trabajo se prepara a la medida de su función, escala y acabado.</p>
        </div>
        <div className="service-list">
          {services.map(([number, title, description]) => (
            <article className="service-row" key={number} data-reveal>
              <span>{number} /</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <i aria-hidden="true">↘</i>
            </article>
          ))}
        </div>
      </section>

      <section className="section materials" id="materiales">
        <div className="materials-intro" data-reveal>
          <p className="section-kicker">EL MATERIAL CORRECTO CAMBIA TODO</p>
          <h2>CUATRO FORMAS<br />DE CONSTRUIR<br /><span className="outline-text">MEJOR.</span></h2>
          <p>Te ayudamos a elegir según el uso de la pieza, no por moda. Dinos qué debe resistir y nosotros definimos cómo imprimirla.</p>
        </div>
        <div className="material-grid">
          {materials.map(([name, tag, description], index) => (
            <article className="material-card" key={name} data-reveal>
              <span className="material-index">0{index + 1}</span>
              <div className={`material-shape shape-${index + 1}`} aria-hidden="true"><i /><i /><i /></div>
              <p>{tag}</p>
              <h3>{name}</h3>
              <div className="material-description">{description}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-band" id="cotizacion" data-reveal>
        <p>¿TIENES UN ARCHIVO STL, OBJ O 3MF?</p>
        <h2>LO CONVERTIMOS<br />EN ALGO <span>REAL.</span></h2>
        <div className="quote-band-bottom">
          <p>Recibe una cotización detallada y recomendaciones para que tu pieza funcione mejor.</p>
          <a className="button button-light" href={quoteUrl} target="_blank" rel="noreferrer">COTIZAR MI PROYECTO <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="section process" id="proceso">
        <div className="process-title" data-reveal>
          <p className="section-kicker">ASÍ TRABAJAMOS</p>
          <h2>DE ARCHIVO<br />A OBJETO.</h2>
        </div>
        <div className="process-grid">
          {steps.map(([number, title, description]) => (
            <article key={number} data-reveal>
              <span>{number}</span>
              <div className="process-line" aria-hidden="true"><i /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section promise">
        <div className="promise-stat" data-reveal>
          <strong>&lt;24H</strong>
          <span>RESPUESTA INICIAL</span>
        </div>
        <div className="promise-copy" data-reveal>
          <p className="section-kicker">NUESTRO COMPROMISO</p>
          <h2>CLARO DESDE<br />LA PRIMERA CAPA.</h2>
          <p>Cotización desglosada, sugerencias técnicas, tiempo estimado y comunicación directa durante todo el proyecto. Sin cargos ocultos ni sorpresas.</p>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div data-reveal>
          <p className="section-kicker">ANTES DE IMPRIMIR</p>
          <h2>DUDAS<br />FRECUENTES.</h2>
        </div>
        <div className="faq-list" data-reveal>
          <details open>
            <summary>¿Necesito tener un modelo 3D? <span>＋</span></summary>
            <p>No necesariamente. Si tienes una idea, foto o referencia, podemos orientarte sobre el diseño y la mejor manera de producirla.</p>
          </details>
          <details>
            <summary>¿Qué archivos puedo enviar? <span>＋</span></summary>
            <p>Trabajamos principalmente con STL, OBJ y 3MF. Incluye las medidas finales y cualquier requisito funcional.</p>
          </details>
          <details>
            <summary>¿Cuánto tarda una impresión? <span>＋</span></summary>
            <p>Depende del tamaño, material, detalle y cantidad. Te damos un tiempo estimado junto con la cotización antes de comenzar.</p>
          </details>
          <details>
            <summary>¿Hacen entregas en Ciudad Madero? <span>＋</span></summary>
            <p>Sí. Coordinamos la entrega en la zona y te confirmamos las opciones disponibles al cotizar.</p>
          </details>
        </div>
      </section>

      <footer>
        <div className="footer-head" data-reveal>
          <p>¿LO IMPRIMIMOS?</p>
          <h2>HAZLO <span>REAL.</span></h2>
          <a className="footer-arrow" href={quoteUrl} target="_blank" rel="noreferrer" aria-label="Solicitar cotización">↗</a>
        </div>
        <div className="footer-bottom">
          <a className="brand" href="#inicio"><span>impres_3DS</span><small>TALLER DE IMPRESIÓN</small></a>
          <p>CIUDAD MADERO, TAMAULIPAS, MÉXICO</p>
          <p>@GANIA_3DS EN INSTAGRAM</p>
          <p>© 2026 impres_3DS</p>
        </div>
      </footer>
    </main>
  );
}
