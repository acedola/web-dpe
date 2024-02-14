'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { loadMenu } from '@/app/api/menu';
import Link from "next/link";  // Agrega la importación de Link


interface Estadistica {
  
  id: number;
  nombre: string;
  cid_cat: {
    id: number;
    cat_nombre: string;
  }[];
}

export  const Main_Menu = () => {
  
  const [lists, setLists] = useState<any>(null);
  const [isStyleChanged, setIsStyleChanged] = useState(false);
  
  const cambiarEstilo = () => {
    setIsStyleChanged(!isStyleChanged);
  };

  useEffect(() => {
    async function fetchMenu() {
      const data = await loadMenu();
      setLists(data.result[0].obtener_estadisticas_con_categorias);
    }
    fetchMenu();
  }, []);

  

    return (
    <>
    <nav className="bottom-nav">
        <ul>
          <li className="estadistica" onClick={cambiarEstilo}>
            <Link href="">ESTÁDISTICAS</Link>
          </li>
          <li>
            <Link href="https://datos.estadistica.ec.gba.gov.ar/" target='blank'>DATOS ABIERTOS</Link>
          </li>
          <li>
            <Link href="/prensa">PRENSA</Link>
          </li>
          <li>
            <Link href="#">CENSOS</Link>
          </li>
        </ul>
      </nav>
      <nav 
        className="nav-container"
        style={{
          zIndex:isStyleChanged ? 1000 : -1,
          opacity: isStyleChanged ? 1 : 0,
          width: isStyleChanged ? "75%" : "-1%",
        }}
      >
        {lists && lists.map((estadistica: Estadistica) => (
          <ul key={estadistica.id} className="dropdown">
            <li><p>{estadistica.nombre}</p>
              <ul className="dropdown">
                {estadistica.cid_cat.map((categoria) => (
                  <li key={categoria.id} className="">
                   <a> <Link href={`/estadisticas/${categoria.id}`}  onClick={cambiarEstilo}>{categoria.cat_nombre}</Link></a>
                  </li>
                ))}
              </ul>
              
            </li>
          </ul>
        ))}
      </nav>
    </>
  );
}