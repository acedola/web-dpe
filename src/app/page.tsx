'use client';
import '@/app/styles/card.css';
import Image from 'next/image';
import NoticiaArt from '@/components/UltimasN';
import { useState, useEffect } from 'react';
import React from 'react';
import IntegerCounter from '@/components/ui/IntegerCounter';
import PercentageCounter from '@/components/ui/PercentageCounter';
import Calendar from '@/components/ui/calendar';

export default function Home() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '2vw'
        }}
      >
        <div className="card-container shadow hover">
          <a href="#">
            <div className="flex justify-center items-center">
              <img src="/images/foto1.jpg" className="imagen-card" />
            </div>
            <div className="card-counter">
              <IntegerCounter
                initialValue={100000}
                finalValue={185000}
                duration={3000}
              />
            </div>

            <p className="card-p1">POBLACIÓN</p>
            <p className="card-p2">Censo 2022</p>
          </a>
        </div>

        <div className="card-container shadow hover">
          <a href="#">
            <div className="flex justify-center items-center">
              <img src="/images/foto2.jpg" className="imagen-card" />
            </div>

            <div className="card-counter">
              <IntegerCounter
                initialValue={150000}
                finalValue={270000}
                duration={1000}
              />
            </div>
            <p className="card-p1">TASA DE DESOCUPACIÓN</p>
            <p className="card-p2">Tercer trim. de 2023</p>
          </a>
        </div>

        <div className="card-container shadow hover">
          <a href="#">
            <div className="flex justify-center items-center">
              <img src="/images/foto3.jpg" className="imagen-card" />
            </div>
            <div className="card-counter">
              <PercentageCounter
                initialValue={-1}
                finalValue={-5.3}
                duration={1000}
              />
            </div>
            <p className="card-p1">
              INDICADOR SINTETICO DE LA INDUSTRIA MANUFACTURERA
            </p>
            <p className="card-p2">Marzo de 2024</p>
          </a>
        </div>

        <div className="card-container shadow hover">
          <a href="#">
            <div className="flex justify-center items-center">
              <img src="/images/foto4.jpg" className="imagen-card" />
            </div>
            <div className="card-counter">
              <PercentageCounter
                initialValue={-1}
                finalValue={-5.3}
                duration={1000}
              />
            </div>
            <p className="card-p1">PRODUCTO BRUTO GEOGRAFICO</p>
            <p className="card-p2">Marzo de 2024</p>
          </a>
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
          <section className="calendario-boton-genero">
            <a href="https://www.sipg.ec.gba.gob.ar" className="boton-censo">
              <Image
                className="censo"
                src="/images/PLACACENSOWEBNUEVA-02.jpg"
                alt="boton-genero"
                width={885}
                height={40}
              ></Image>
            </a>
          </section>
        </div>

        <div className="container-2">
          <section className="titulo-2">
            <p className="titulo-p">CALENDARIO DE DIFUSIÓN</p>
          </section>

          <div className="Calendar">
            <Calendar />
          </div>

          <div className="botonesNuevos">
            <div className="btnNuevo bg-transparent text-blue-700 font-semibold py-2 px-4 border hover:border-transparent rounded text-center ">
              <a href="http://" target="_blank">
                CENSO 2022
              </a>
            </div>

            <div className="btnNuevo bg-transparent text-blue-700 font-semibold py-2 px-4 border hover:border-transparent rounded text-center  ">
              <a href="revista" target="_blank">
                REVISTA ESTUDIOS DE POBLACIÃ“N
              </a>
            </div>
            <div className="btnNuevo bg-transparent text-blue-700 font-semibold py-2 px-4 border hover:border-transparent rounded text-center  ">
              <a href="http://" target="_blank">
                ENCUESTA DE SERVICIOS DE SALUD, EPAUSS 2023
              </a>
            </div>
            <div className="btnNuevo bg-transparent text-blue-700 font-semibold py-2 px-4 border hover:border-transparent rounded text-center  ">
              <a
                href="http://www.desa.estadistica.ec.gba.gov.ar/estadisticas/5"
                target="_blank"
              >
                PRODUCTO BRUTO GEOGRAFICO MUNICIPAL
              </a>
            </div>
            <div className="btnNuevo bg-transparent text-blue-700 font-semibold py-2 px-4 border hover:border-transparent rounded text-center  ">
              <a href="http://" target="_blank">
                ENCUESTA DE CONSUMO ENERGÉTICO RESIDENCIAL 2023
              </a>
            </div>
          </div>
          <section className="calendario-boton-genero">
            <a href="https://www.sipg.ec.gba.gob.ar" className="boton-genero">
              <Image
                className="genero"
                src="/images/PLACAGENEROWEBNUEVA.jpg"
                alt="boton-genero"
                width={885}
                height={40}
              ></Image>
            </a>
          </section>
        </div>
      </main>

      <section className="botones">
        <a className="item-g" href="/censos">
          CENSOS
        </a>
        <a className="item-a" href="/anuarios">
          ANUARIOS
        </a>
        <a className="item-b" href="#">
          DATOS BÁSICOS
        </a>
        <a className="item-c" href="/biblioteca">
          BIBLIOTECA DIGITAL
        </a>
        <a
          className="item-d"
          href="http://www.estadistica.ec.gba.gov.ar/encuestadores/"
          target="_blank"
        >
          VERIFICACION DE ENCUESTADORES
        </a>
        <a className="item-f" href="operativos">
          OPERATIVOS EN CAMPO
        </a>

        <a
          className="item-e"
          href="https://encuestas.estadistica.ec.gba.gov.ar/index.php/886163?lang=es"
          target="_blank"
        >
          CONVOCATORIA ENCUESTADORES
        </a>
        <a
          className="item-h"
          href="https://escuelamunicipal.economia.gba.gob.ar/"
          target="_blank"
        >
          CAPACITACIÓN
        </a>
      </section>
    </>
  );
}
