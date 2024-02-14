'use client';
import Image from 'next/image';
import NoticiaArt from '@/components/UltimasN';
import { useState, useEffect } from 'react';

const startCount = 10000;
const endCount = 17569053;
const duration = 3000; // Duration in milliseconds

export default function Home() {
  const [count, setCount] = useState(startCount);

  useEffect(() => {
    const range = endCount - startCount;
    const increment = range / duration;
    let current = startCount;

    const timer = setInterval(() => {
      current += increment;
      setCount(Math.round(current));
      if (current >= endCount) {
        clearInterval(timer);
        setCount(endCount);
      }
    }, 1);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '2vw'
        }}
      >
        <div className="transform  rounded-xl shadow-2xl py-8 px-14 transition duration-300 hover:scale-105">
          <img src="/images/foto1.jpg" className="w-svw h-auto" />
          <p
            id="count"
            className="bg-redd-500 text-center text-2xl font-extrabold text-slate-400"
          >
            {count.toLocaleString()}
          </p>
          <p className="text-center text-2xl font-bold text-cyan-500">
            POBLACION
          </p>
        </div>
        <div className="transform rounded-xl shadow-2xl py-8 px-14 transition duration-300 hover:scale-105">
          <img src="/images/foto2.jpg" className="w-svw h-auto" />
          <p
            id="count"
            className="bg-redd-500 text-center text-2xl font-extrabold text-slate-400"
          >
            {count.toLocaleString()}
          </p>
          <p className="text-center text-2xl font-bold text-cyan-500">CENSO</p>
        </div>
        <div className="transform rounded-xl shadow-2xl py-8 px-14 transition duration-300 hover:scale-105">
          <img src="/images/foto3.jpg" className="w-svw h-auto" />
          <p
            id="count"
            className="text-center text-2xl font-extrabold text-slate-400"
          >
            {count.toLocaleString()}
          </p>
          <p className="text-center text-2xl font-bold text-cyan-500">
            ECONOMIA
          </p>
        </div>
        <div className="transform rounded-xl shadow-2xl py-8 px-14 transition duration-300 hover:scale-105">
          <img src="/images/foto4.jpg" className="w-svw h-auto" />
          <p
            id="count"
            className="text-center text-2xl font-extrabold text-slate-400"
          >
            {count.toLocaleString()}
          </p>
          <p
            id="count"
            className="text-center text-2xl font-bold text-cyan-500"
          >
            Provincia
          </p>
        </div>
      </div>

      <main>
        <div className="container-1">
          <section className="titulo-1">
            <p className="titulo-p">ULTIMAS NOTICIAS</p>
          </section>
          <section className="ultimas-novedades">
            <NoticiaArt />
          </section>
        </div>

        <div className="container-2">
          <section className="titulo-2">
            <p className="titulo-p">CALENDARIO DE DIFUSIÓN</p>
          </section>

          <iframe className="iframe-calendar" src="/cal/index.html"></iframe>

          <section className="calendario-boton-genero">
            <a href="https://www.sipg.ec.gba.gob.ar" className="boton-genero">
              <Image
                className="genero"
                src="/images/PLACA GENERO1-01.jpg"
                alt="boton-genero"
                width={885}
                height={100}
              ></Image>
            </a>
          </section>
        </div>
      </main>
      <section className="botones">
        <a className="item-a" href="#">
          PUBLICACIONES
        </a>
        <a className="item-b" href="#">
          DATOS BÁSICOS
        </a>
        <a className="item-d" href="#">
          VERIFICACION DE ENCUESTADORES
        </a>
        <a className="item-f" href="#">
          OPERATIVOS EN CAMPO
        </a>
        <a className="item-c" href="/biblioteca">
          BIBLIOTECA DIGITAL
        </a>
        <a className="item-g" href="#">
          CENSOS
        </a>
        <a className="item-e" href="#">
          CONVOCATORIA ABIERTA A ENCUESTADORES
        </a>
        <a className="item-h" href="#">
          CONVOCATORIA A AUTORES
        </a>
      </section>
    </>
  );
}
