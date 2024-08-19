/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

export function Baner() {
  return (
    <div className="banner">
      <div className="titulo">
        Dirección Provincial de <span>Estadística</span>
        <br />
        <p className="hacienda">
          MINISTERIO DE ECONOMIA PROVINCIA DE BUENOS AIRES
        </p>
      </div>
      <div className="banner-logo">
        <img
          className="header-img"
         
          alt=""
          src="/../images/logo-provincia.svg"
        />
      </div>
    </div>
  );
}
