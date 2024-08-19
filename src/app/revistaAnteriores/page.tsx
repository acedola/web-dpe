import Link from "next/link";

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
            <h1>Estudios de Población de la provincia de Buenos Aires N° 5</h1>
            <div className="revistaAnteriores">            
            <a className="one"   href="/../pdf/revista5.pdf" target='_blank'>
            <img src="/../images/POBLACION 5.jpg" alt="" />
            </a>            
            <p className="two">
            En esta reedición de la revista “Estudios de Población de la provincia de Buenos Aires”, se presenta un artículo donde plantea estimar el efecto que el cierre de la brecha de género en la participación e ingresos laborales tendría en la pobreza y en la desigualdad de ingresos de los hogares; un segundo informe técnico que analiza la evolución y composición del trabajo registrado asalariado en la provincia de Buenos Aires en comparación al total de puestos registrados en el país; un tercer informe técnico que estudia el descenso de la tasa de fecundidad adolescente, niñas y adolescentes de entre 10 y 19 años en la última década; un cuarto informe técnico que estima la carga de mortalidad atribuible al consumo de tabaco; un ensayo donde se expone la importancia y trascendencia de la creación del Área de Trabajadores y Trabajadoras Rurales bajo la órbita del Ministerio de Desarrollo Agrario de la PBA; un resumen de investigación que analiza la metodología para caracterizar a los hogares unipersonales; y por último una reseña del libro “La terminalidad de la escuela secundaria pública y los programas de mejoras: políticas de inclusión en los partidos de Luján, San Miguel y Moreno”.
            </p>
            </div>
          </div>

          <div className="main-info">
            <h1>Estudios de Población de la provincia de Buenos Aires N° 4</h1>
            <div className="revistaAnteriores">            
            <a className="one"   href="/../pdf/revista4.pdf" target='_blank'>
            <img src="/../images/Poblacion4.png" alt="" />
            </a>            
            <p className="two revP">
            Esta edición de la Revista: “Estudios de Población de la provincia de Buenos Aires”, presenta un informe técnico donde se trabaja la metodología oficial de estimación de la pobreza por ingreso, brindando datos para el año 2016; un segundo informe exhibe los principales resultados de la Tercer Encuesta Nacional de Factores de Riesgo que se desarrolló durante el año 2013. El tercero muestra un panorama del empleo público en base a la Encuesta Permanente de Hogares. Todos ellos son trabajos referidos a la provincia de Buenos Aires. Y, por último, se presentan datos sobre la evolución de la población por partido y entidades o barrios de los Partidos del Gran Buenos Aires, durante el período intercensal 2001-2010.

            </p>
            </div>
          </div>

          
        </section>

    </>
  );
}