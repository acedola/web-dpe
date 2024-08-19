import Link from "next/link";
import Image from "next/image";

export default function Institucional() {
  return (
    <>
       
        <div className="title-institucional">
        <h1>REVISTA POBLACIÓN</h1>
        <div className="container-botones">
          <Link href="/../pdf/Instrucciones.pdf" target='_blank'>Instruccion para autores</Link>
          <Link href="https://www.estadistica.ec.gba.gov.ar/dpe/formulario/" target='_blank'>Formulario de inscripcion</Link>
          <Link href="revista">Revista Población Nº6</Link>
          <Link href="revistaAnteriores">Ediciones anteriores</Link>
        </div>
      </div>
      
        <section>
          
          <div className="main-info">
            <h1>Estudios de Población de la provincia de Buenos Aires N° 6</h1>
            <div className="revista6">
              <img src="/../images/poblacion6convocatoria.jpeg" alt="" />
            </div>
            <div>
              
              <p className="revistaP">
              La Dirección Provincial de Estadística, dependiente de la Subsecretaria de Coordinación Económica y Estadística, Ministerio de Hacienda y Finanzas de la provincia de Buenos Aires, invita a todos aquellos interesados, público especializado y no especializado, a difundir los resultados de investigaciones o trabajos en nuestra próxima publicación.

              Los mismos pueden incluir temas relacionados con la población en sus múltiples aspectos: demográficos, sociales, económicos, metodológicos, entre otros, tanto a nivel de la Provincia en su conjunto, como de subdivisiones menores como Municipios. También está abierta a la recepción de estudios que involucren el ámbito Nacional o de otras regiones en temas de interés para la provincia de Buenos Aires.

              Agradecemos la difusión de nuestra convocatoria.
              <br />
              <br />
              Cordialmente
              <br />

              Comité Editorial
              <br />
              <br />  


              Correo de consultas:  revistapoblacion@estadistica.ec.gba.gov.ar
              </p>
            </div>

          </div>
        </section>
    </>
  );
}