import Link from "next/link";

const links = [
  {
    label: "Inicio",
    route: "/",
    separador: "|",
  },
  {
    label: "Institucional",
    route: "/institucional",
    separador: "|",
  },
  {
    label: "Contacto",
    route: "/contacto",
    separador: "",
  },
];

export function Navigation() {
  return (
    <nav className="top-nav">
      <ul>
        {links.map(({ label, route, separador }) => (
          <li key={route}>
            <Link href={route}>{label}</Link>
            <p className="separador">{separador}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}
