import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div>
        <Image
          src="/../images/footer.jpg"
          width={538}
          height={252}
          alt="provincia"
        ></Image>
      </div>
      <ul className="columna-1">
        <li>Contacto</li>
        <li>
          <p>Calle 7 N°684. B1900BBQ.</p>
          <br />
          <p>La Plata. Buenos Aires, Argentina.</p>
          <br />
          <p>Teléfonos:(0221) 429-4400 Interno 97014/97016</p>
        </li>
      </ul>
      <ul className="columna-2">
        <li>
          <Link href="#">Guía Servicios</Link>
        </li>
        <li>
          <Link href="https://sistemas.gba.gov.ar/consulta/expedientes/index.php">
            Expedientes
          </Link>
        </li>
        <li>
          <Link href="https://www.gba.gob.ar/seguridadvial">
            Seguridad Vial
          </Link>
        </li>
        <li>
          <Link href="https://web.arba.gov.ar/">ARBA</Link>
        </li>
        <li>
          <Link href="https://www.boletinoficial.gba.gob.ar/">
            Boletín Oficial
          </Link>
        </li>
        <li>
          <Link href="https://www.gba.gob.ar/registrodelaspersonas">
            Registro de las Personas
          </Link>
        </li>
        <li>
          <Link href="https://www.gba.gob.ar/Politicasdeprivacidad">
            Políticas de privacidad
          </Link>
        </li>
      </ul>
      <ul className="columna-3">
        <li>
          <Link href="#">Uso Interno</Link>
        </li>
        <li>
          <Link href="https://mail.gba.gob.ar/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.gba.gob.ar%2fowa%2f">
            Webmail GBA
          </Link>
        </li>
        <li>
          <Link href="https://webmail.gba.gob.ar/login.php">Webmail HORDE</Link>
        </li>
        <li>
          <Link href="https://sistemas.gba.gob.ar/login/login.php">
            Sistemas
          </Link>
        </li>
        <li>
          <Link href="https://gdeba.gba.gob.ar/">GDEBA</Link>
        </li>
        <li>
          <Link href="https://portal.rrhh.gba.gob.ar/portal/login">
            Portal del Empleado
          </Link>
        </li>
      </ul>
    </footer>
  );
}
