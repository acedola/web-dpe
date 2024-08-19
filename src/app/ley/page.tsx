'use client';

import { Footer } from '../../components/ui/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function ley() {
  return (
    <>
      <div className="title-institucional">
        <h1>INSTITUCIONAL</h1>
        <div className="container-botones">
          <Link href="ley">Ley 14998</Link>
          <Link href="autoridades">Autoridades</Link>
          <Link href="institucional">Misiones y Funciones</Link>
          <Link href="historia">Historia</Link>
        </div>
      </div>

      <div className="main-institucional">
        <section className="title-mision">
          <p>LEY 14.998. CREACIÓN DEL SISTEMA ESTADÍSTICO PROVINCIAL</p>
        </section>
      </div>
      <div className="main-institucional">
        <div className="main-info">
          <h2>LEY 14.998. CREACIÓN DEL SISTEMA ESTADÍSTICO PROVINCIAL </h2>
          <br />
          <br />
          <p>
            La sanción de Ley 14.998 que crea el Sistema Estadístico Provincial,
            permitirá desarrollar las tareas propias de la Dirección Provincial
            de Estadística (DPE) sobre una base de legitimidad normativa, para
            que se genere la confianza y el reconocimiento necesario, por parte
            de la población de la provincia de Buenos Aires.
          </p>
          <p>
            Desde el año 1977, la Provincia se encontraba sin marco normativo en
            materia de producción de estadísticas oficiales. La presente ley,
            que fue impulsada desde el Poder Ejecutivo provincial, es un avance
            que esperó 40 años para hacerse efectivo.
          </p>
          <p>
            Es así que desde inicios de la actual gestión de gobierno se trabaja
            en el fortalecimiento de las estadísticas públicas. Se trabaja para
            generar estadísticas de calidad, oportunas, confiables y
            transparentes para que la sociedad bonaerense en su conjunto pueda
            tomar decisiones correctas, basadas en dicha información.
            Permitiendo a uno de los actores fundamentales de la sociedad, como
            es el gobierno, delinear y evaluar sus políticas públicas
          </p>
          <p>
            Es en esta línea de acción, que hoy se plasma en la presente,
            estableciendo a las estadísticas oficiales como un bien público. Es
            así que se dio un paso fundamental y trascendente en la materia.
          </p>
          <br />
          <br />
          <h1>La Ley puede resumirse en los siguientes ítems:</h1>
          <p>
            <ul style={{ listStyle: 'outside' }}>
              <li>
                Se establece a las estadísticas oficiales como bien público;
              </li>
              <li>
                Con ese espíritu es que se incorporan los principios
                fundamentales enunciados por las Naciones Unidas y la OCDE.
                Ellos deben regir y garantizar la producción y provisión dentro
                del SEP: independencia, imparcialidad, transparencia,
                accesibilidad y confidencialidad;
              </li>
              <li>
                Se posiciona a la DPE como organismo central y autoridad de
                aplicación;
              </li>
              <li>Se determinan las funciones y recursos que tendrá la DPE;</li>
              <li>
                Se crea el SEP integrado por todo órgano o entidad pública que
                lleve adelante la recopilación de datos e información
                estadística dentro del territorio de la Provincia, los cuales
                tendrán autonomía operativa respetando el principio de
                centralización normativa y metodológica establecida por la DPE;
              </li>
              <li>
                La Ley incorpora al derecho provincial el “contrato
                estadístico”, el cual establece tanto la obligatoriedad de
                informar como la confidencialidad de la información brindada,
                basada en el secreto estadístico;
              </li>
              <li>
                Se establece la actividad censal en la provincia, como carga
                pública;
              </li>
              <li>
                Por último, y no menos importante, se regula el libre acceso y
                la gratuidad de las estadísticas, en tanto públicas,
                considerando tanto un derecho de los ciudadanos como una
                obligación del organismo estadístico; para que el acceso no
                devenga en una ficción se garantiza que los datos a los cuales
                se acceden en forma gratuita se encuentran dispuestos en forma
                clara, ordenada y sencilla, destinados a un público no
                especializado.
              </li>
            </ul>
          </p>
        </div>
        <div className="ley">
          <div className="tamano-div">
            <Link
              className="parrafos"
              rel="stylesheet"
              href="/../pdf/Ley 14998.pdf"
              target="_blank"
            >
              <Image
                src="/../images/pdf.svg"
                alt="pdf"
                width={100}
                height={100}
              ></Image>
              <p>Ley 14.998</p>
            </Link>
          </div>

          <br />
          <div className="tamano-div">
            <Link
              className="parrafos"
              rel="stylesheet"
              href="/../pdf/Decreto Reglamentario 713_22.pdf"
              target="_blank"
            >
              <Image
                src="/../images/pdf.svg"
                alt="pdf"
                width={100}
                height={100}
              ></Image>
              <p>Decreto Reglamentario 713/22</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
