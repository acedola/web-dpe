import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { loadMenu } from '@/app/api/menu';
import { useCatNombre } from '@/context/CatNombreContext';

interface Estadistica {
  id: number;
  nombre: string;
  cid_cat: {
    id: number;
    cat_nombre: string;
  }[];
}

// Objeto de mapeo de categorías a URLs
const categoriasUrls = {
  25: 'https://mapas.estadistica.ec.gba.gov.ar/portal/apps/sites/#/mapas-estadisticos/pages/descargas-shapes',
  26: 'https://cartografiacensal-2022.estadistica.ec.gba.gov.ar/',
  27: 'https://mapas.estadistica.ec.gba.gov.ar/portal/apps/sites/#/mapas-estadisticos/pages/visualizadores',
  31: 'https://mapas.estadistica.ec.gba.gov.ar/portal/apps/sites/#/mapas-estadisticos/pages/geoservicios'
};

export const Main_Menu = () => {
  const [lists, setLists] = useState<Estadistica[]>([]);
  const [isStyleChanged, setIsStyleChanged] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { setCatNombre } = useCatNombre();

  const cambiarEstilo = () => {
    setIsStyleChanged(!isStyleChanged);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsStyleChanged(false);
    }
  };

  useEffect(() => {
    async function fetchMenu() {
      const data = await loadMenu();
      setLists(data.result[0].obtener_estadisticas_con_categorias);
    }

    fetchMenu();
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleCategoryClick(cat_nombre: string, id: number) {
    if (id === 32 || id === 33 || id === 34) {
      setCatNombre(cat_nombre); // Establece el nombre de la categoría en el contexto
      cambiarEstilo();
    } else {
      cambiarEstilo(); // Cambia el estilo si la condición es falsa
    }
  }

  function obtenerUrlCategoria(id: number) {
    if (id === 32 || id === 33 || id === 34) {
      return `/censos/${id}`;
    }
    return categoriasUrls[id] || `/estadisticas/${id}`;
  }

  return (
    <>
      <nav className="bottom-nav">
        <ul>
          <li className="estadistica" onClick={cambiarEstilo}>
            <Link href="">ESTADISTICAS</Link>
          </li>
          <li>
            <Link
              href="https://datos.estadistica.ec.gba.gov.ar/"
              target="blank"
            >
              DATOS ABIERTOS
            </Link>
          </li>
          <li>
            <Link
              href="https://mapas.estadistica.ec.gba.gov.ar/portal/apps/sites/#/mapas-estadisticos"
              target="blank"
            >
              PORTAL DE MAPAS
            </Link>
          </li>
          <li>
            <Link href="/prensa">PRENSA</Link>
          </li>
        </ul>
      </nav>

      {isStyleChanged && (
        <nav
          className="nav-container position1"
          ref={menuRef}
          style={{ zIndex: 1000, opacity: 1, width: '90%' }}
        >
          {lists &&
            lists.map((estadistica: Estadistica) => (
              <ul key={estadistica.id} className="dropdown">
                <li>
                  <p>{estadistica.nombre}</p>
                  <ul className="dropdown">
                    {estadistica.cid_cat.map((categoria) => (
                      <li key={categoria.id} className="">
                        <Link
                          href={obtenerUrlCategoria(categoria.id)}
                          onClick={() =>
                            handleCategoryClick(
                              categoria.cat_nombre,
                              categoria.id
                            )
                          }
                          {...(categoria.id === 25 ||
                          categoria.id === 26 ||
                          categoria.id === 27 ||
                          categoria.id === 31
                            ? { target: '_blank' }
                            : {})}
                        >
                          {categoria.cat_nombre}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            ))}
        </nav>
      )}
    </>
  );
};
