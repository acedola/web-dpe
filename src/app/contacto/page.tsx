'use client';
//import { Menumain } from "../../components/Menumain";
import { Footer } from '../../components/ui/Footer';
export default function Contacto() {
  return (
    <>
      <main className="main-contact">
        <div className="card-info">
          <ul>
            <li>Calle 7 N°684. B1900BBQ.</li>
            <li>La Plata. Buenos Aires, Argentina.</li>
            <li>Telefonos (0221) 429-4400</li>
            <li>Internos 97014 / 97016 </li>
            <li>dpe@estadistica.ec.gba.gov.ar</li>
          </ul>
        </div>

        <div className="card-map">
          <section className="map">
            <iframe
              className="frame-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1635.8953819500298!2d-57.95439343437324!3d-34.911700011557485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e6364cf9e6bf%3A0xd32975697a4459d!2sAv.%207%20684%2C%20B1900TFR%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1693237964275!5m2!1ses!2sar"
            ></iframe>
          </section>
        </div>
      </main>
    </>
  );
}
