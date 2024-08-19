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
          <p>HISTORIA</p>
        </section>
      </div>
      <div className="main-institucional">
        <div className="main-info">
          <h2>BREVE HISTORIA </h2>
          <br />
          <br />
          <p>
            Hacia mediados de Diciembre de 1821, durante el Gobierno del General
            Martín Rodríguez y bajo la inspiración de su Ministro de Gobierno
            don Bernardino Rivadavia, se crea el Registro Estadístico de la
            Provincia de Buenos Aires, institución que a través de los años, con
            diverso nivel institucional y adoptando distintos nombres, ha dado
            origen a la actual Dirección Provincial de Estadística del
            Ministerio de Economía de la Provincia. Desde su creación los
            encargados de desarrollar la actividad estadística de la Provincia
            se han esforzado por brindar a los distintos gobiernos una
            información adecuada y confiable. Ésta resulta indispensable para el
            estudio y resolución de los vitales y complejos problemas que
            afectan la marcha institucional del Estado . También a los usuarios
            en general brindando información útil para el logro de sus
            objetivos. Transcripción literal del Decreto del 13 de Diciembre de
            1821, que suscriben Martín Rodríguez como Gobernador de la Provincia
            y Bernardino Rivadavia como Ministro de Gobierno:
          </p>
          <br />
          <p>Buenos Aires, 13 de Diciembre de 1821</p>
          <br />
          <p>
            Los conocimientos estadísticos no han servido por dilatado tiempo
            más que de rasgos de curiosidad o adorno para la historia. Pero
            cuando llegaron a copiarse hasta un grado que fijaron la meditación
            de algunos talentos originales, apareció la economía política que
            rápidamente se elevó al rango de una ciencia: ésta retomó los
            principios de todos los gobiernos, a quienes ha dejado, sin embargo,
            en la vaga situación en que ella misma se halla; porque habiendo su
            teoría adquirido la perfección de que es susceptible, no ha sido
            hasta el presente feliz en los pasos que ha dado hacia la aplicación
            de ella a la práctica. Mas ya la estadística se presente como el
            único medio de dar a la economía política la utilidad que la
            sociedad le demanda, y a los gobiernos el medio más seguro de
            calcular siempre su marcha, y de sacar de los mismos efectos de ella
            ideas originales que hagan salir continuamente su administración en
            saber y beneficencia. Estas consideraciones son sin duda de una
            aplicación general, mas se controlan de un modo especial a los
            países que comienzan su carrera y tienen un vasto campo que
            recorrer. En fuerza de ella es, que el gobierno ha acordado y
            decretado lo siguiente.
          </p>
          <p>
            Es en esta línea de acción, que hoy se plasma en la presente,
            estableciendo a las estadísticas oficiales como un bien público. Es
            así que se dio un paso fundamental y trascendente en la materia.
          </p>
          <ol style={{ marginLeft: '60px' }}>
            <li>
              Desde el primer mes del año próximo se publicará en cada una de
              ellas un periódico bajo la denominación de Registro Estadístico.
            </li>
            <li>
              La materia del Registro Estadístico verá los estados, razones,
              actos, y observaciones de la estadística en general del territorio
              de la provincia
            </li>
            <li>
              El ministro secretario de gobierno encargará a un individuo hábil
              la redacción del Registro Estadístico, bajo el plan que él se hará
              presentar y apruebe.
            </li>
            <li>
              El ministro secretario de gobierno queda encargado de la ejecución
              de este decreto que se insertará en el Registro Oficial.
            </li>
          </ol>
          <p style={{ fontSize: '20px' }}>
            El 13 de Diciembre de 2016, se conmemoró dentro del ministerio el
            195º aniversario desde su creación con un evento distintivo
          </p>
          <br />
          <p style={{ fontSize: '20px' }}>
            El 9 de Enero de 2018 se sancionó la Ley 14.998 que crea el Sistema
            Estadístico Provincial <Link href="ley">(Ver Ley)</Link>
          </p>
        </div>
      </div>
    </>
  );
}
