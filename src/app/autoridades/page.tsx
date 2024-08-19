import Image from 'next/image';
//import { Menumain } from "../../components/Menumain";
import { Footer } from '../../components/ui/Footer';
import Link from 'next/link';

export default function Autoridades() {
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
          <p>AUTORIDADES</p>
        </section>
        <section className="card-perfil">
          <Image
            src="/../images/diego.jpeg"
            alt="Rusansky"
            width={250}
            height={250}
          ></Image>
          <div>
            <ul>
              <li className="titulo-principal">
                DIRECTOR PROVINCIAL DE ESTADÍSTICA
              </li>
              <li className="titulo-secundario">ACT. DIEGO RUSANSKY</li>
              <li className="correo-electronico">
                privada@estadistica.ec.gba.gov.ar
              </li>
              <li className="telefono">
                telefono (0221) 429-4400 int. 97014/97016
              </li>
            </ul>
          </div>
        </section>
        <section className="card-perfil">
          <Image
            src="/../images/dani.jpeg"
            alt="Besler"
            width={250}
            height={250}
          ></Image>
          <div>
            <ul>
              <li className="titulo-principal">
                DIRECTOR DE ESTADÍSTICAS ECONÓMICAS{' '}
              </li>
              <li className="titulo-secundario">Lic. Daniel German BESLER</li>
              <li className="correo-electronico">
                dbesler@estadistica.ec.gba.gov.ar
              </li>
              <li className="telefono">
                telefono (0221) 429-4400 int. 97014/97016
              </li>
            </ul>
          </div>
        </section>
        <section className="card-perfil">
          <Image
            src="/../images/silvia.jpg"
            alt="Tomas"
            width={250}
            height={250}
          ></Image>
          <div>
            <ul>
              <li className="titulo-principal">
                DIRECTORA DE ESTADÍSTICAS SOCIALES
              </li>
              <li className="titulo-secundario">Lic. María Silvia TOMÁS</li>
              <li className="correo-electronico">
                silviatomas@estadistica.ec.gba.gov.ar
              </li>
              <li className="telefono">
                telefono (0221) 429-4400 int. 97014/97016{' '}
              </li>
            </ul>
          </div>
        </section>
        <section className="card-perfil">
          <Image
            src="/../images/fede.jpeg"
            alt="Ferella"
            width={250}
            height={250}
          ></Image>
          <div>
            <ul>
              <li className="titulo-principal">
                DIRECTOR DE METODOLOGÍA, PLANIFICACIÓN Y COORDINACIÓN DEL SEP
              </li>
              <li className="titulo-secundario">Federico FERELLA</li>
              <li className="correo-electronico">
                ffere@estadistica.ec.gba.gov.ar
              </li>
              <li className="telefono">
                telefono (0221) 429-4400 int. 97014/97016
              </li>
            </ul>
          </div>
        </section>
        <section className="organigrama">
          <div>
            <Image
              src="/../images/pdf.svg"
              alt="pdf"
              width={150}
              height={150}
            ></Image>
          </div>

          <Link
            className="parrafos"
            rel="stylesheet"
            href="/../pdf/Organigrama_dpe_24.pdf"
            target="_blank"
          >
            <p>ORGANIGRAMA DPE</p>
          </Link>
        </section>{' '}
      </div>
    </>
  );
}
