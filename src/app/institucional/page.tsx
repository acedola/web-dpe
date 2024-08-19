//import { Menumain } from "../../components/Menumain";
import { Footer } from '../../components/ui/Footer';
import Link from 'next/link';

export default function Institucional() {
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
          <p>MISIÓN, VISIÓN Y FUNCIONES</p>
        </section>

        <section>
          <div className="main-info">
            <h1>MISIÓN</h1>
            <p>
              Recabar , producir y brindar información de alta calidad, oportuna
              y relevante tanto para el diseño de las polítcas públicas como
              para la toma de decisiones de diversos actores
            </p>
          </div>

          <div className="main-info">
            <h1>VISIÓN</h1>
            <p>
              Se pretende ser referente en la producción de información
              estadístca de la Provincia de Buenos Aires, artculando con todas
              las entdades del Sistema Estadístco Provincia y el Sistema
              Estadístco Nacional para generar conocimiento.
            </p>
          </div>

          <div className="main-info">
            <h1>ACCIONES Y FUNCIONES</h1>
            <ul>
              <li>
                La Dirección Provincial de Estadístca tendrá las siguientes
                funciones que le corresponden como Organismo Técnico Rector del
                Sistema Estadístco Provincial según ARTÍCULO 6º de la Ley
                14.998:
              </li>
              <li>
                a) Planificar y orientar la metodología de toda actvidad
                estadístca oficial que se desarrolle en el ámbito de la
                provincia de Buenos Aires;
              </li>
              <li>
                b) Estructurar, artcular y coordinar el Sistema Estadístco
                Provincial, y ponerlo en funcionamiento de acuerdo con los
                principios de centralización normatva y metodológica, y
                descentralizacion ejecutva;{' '}
              </li>
              <li>
                c) Establecer polítcas de coordinación y complementación con el
                Sistema Estadístco Nacional (SEN);
              </li>
              <li>
                d) Definir y desarrollar el Programa Estadístco Anual (PEA) y
                establecer normas metodológicas y operatvas para su ejecución;
                impartr instrucciones para su aplicación, supervisar su
                desarrollo y resultados
              </li>
              <li>
                e) Definir y desarrollar el Programa Estadístco Plurianual (PEP)
                y establecer normas metodológicas y operatvas para su ejecución;
                impartr instrucciones para su aplicación, supervisar su
                desarrollo y resultado;
              </li>
              <li>
                f) Definir y ejecutar el cronograma de publicaciones de
                estadístcas oficiales a cargo de la Dirección Provincial de
                Estadístca, a fin de difundir la información estadístca para la
                población general;
              </li>
              <li>
                g) Organizar, actualizar y administrar los datos estadístcos de
                la Provincia;
              </li>
              <li>
                h) Coordinar las tareas relatvas a los operatvos censales y
                encuestas que se desarrollen en el territorio de la Provincia;
              </li>
              <li>
                i) Fomentar la creación y fortalecimiento de servicios
                estadístcos y coordinar sus actvidades dentro del Sistema
                Estadístco Provincial;
              </li>
              <li>
                j) Realizar capacitación técnica, con el objeto de perfeccionar
                el nivel cientfico del Sistema Estadístco Provincial;
              </li>
              <li>
                k) Representar a la provincia de Buenos Aires ante el Sistema
                Estadístco Nacional (SEN) en los términos previstos en la Ley
                Nacional Nº 17.622 y modificatorias o la que en el futuro la
                reemplace;
              </li>
              <li>
                l) Celebrar, ad referéndum del Ministro de Economía, convenios
                de coordinación con organismos nacionales, provinciales,
                municipales e internacionales a los fines del cumplimiento de
                los objetvos de la presente ley;
              </li>
              <li>
                m) Receptar las necesidades de información de los usuarios con
                el fin de satsfacerlas.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
