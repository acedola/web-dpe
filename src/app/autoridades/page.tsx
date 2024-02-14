import Image from "next/image";
//import { Menumain } from "../../components/Menumain";
import { Footer } from "../../components/Footer";
import Link from "next/link";

export default function Autoridades() {
  return (
    <>
      
      <div className="title-institucional">
        <h1>INSTITUCIONAL</h1>
        <div className="container-botones">
          <Link href="ley">LEY 14998</Link>
          <Link href="autoridades">Autoridades</Link>
          <Link href="institucional">Misiones y Funciones</Link>
          <Link href="historia">HISTORIA</Link>
        </div>
      </div>
      <div className="main-institucional">
        <section className="title-mision">
          <p>AUTORIDADES</p>
        </section>

        <section className="card-perfil">
          <Image
            src="/../images/perfil2.jpg"
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
            src="/../images/perfil2.jpg"
            alt="Besler"
            width={250}
            height={250}
          ></Image>
          <div>
            <ul>
              <li className="titulo-principal">
                DIRECTOR DE ESTADÍSTICAS ECONÓMICAS{" "}
              </li>
              <li className="titulo-secundario">Lic. Daniel German BESLER</li>
              <li className="correo-electronico">
                sobredbesler@estadistica.ec.gba.gov.ar
              </li>
              <li className="telefono">
                telefono (0221) 429-4400 int. 97014/97016
              </li>
            </ul>
          </div>
        </section>

        <section className="card-perfil">
          <Image
            src="/../images/perfil2.jpg"
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
                sobresilviatomas@estadistica.ec.gba.gov.ar
              </li>
              <li className="telefono">
                telefono (0221) 429-4400 int. 97014/97016{" "}
              </li>
            </ul>
          </div>
        </section>

        <section className="card-perfil">
          <Image
            src="/../images/perfil2.jpg"
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
                sobreffere@estadistica.ec.gba.gov.ar
              </li>
              <li className="telefono">
                telefono (0221) 429-4400 int. 97014/97016
              </li>
            </ul>
          </div>
        </section>

        <section className="organigrama">
          <p>ORGANIGRAMA DPE</p>
          <div>
            <Image
              src="/../images/pdf.jpg"
              alt="pdf"
              width={100}
              height={100}
            ></Image>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
