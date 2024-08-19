/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { loadArticulosCensos } from '@/app/api/articulosCensos';

interface ArticuloSec {
  option: number | null;
}

interface ArticuloData {
  id: number;
  attributes: {
    Titulo: string;
    parrafos: string; // Cambiado de 'parrafo' a 'parrafos' para coincidir con tu JSON
    TituloInforme: string;
    TituloCuadro: string;
    indformes: string; // Cambiado de 'Informes' a 'indformes' para coincidir con tu JSON
    cuadros: string; // Cambiado de 'Cuadros' a 'cuadros' para coincidir con tu JSON
    contenido: {
      data: {
        id: number;
        attributes: {
          formats: {
            large?: {
              url: string;
            };
            medium?: {
              url: string;
            };
            small?: {
              url: string;
            };
            thumbnail?: {
              url: string;
            };
          };
        };
      }[];
    };
  };
}

const findBestImage = (
  imageData: ArticuloData['attributes']['contenido']['data']
): string | null => {
  const availableFormats: Array<
    keyof ArticuloData['attributes']['contenido']['data'][0]['attributes']['formats']
  > = ['large', 'medium', 'small', 'thumbnail'];

  for (const format of availableFormats) {
    const image = imageData.find(
      (item) => item.attributes.formats && item.attributes.formats[format]
    );
    if (image) {
      return image.attributes.formats[format]!.url;
    }
  }

  return null;
};

const ArticuloCenso: React.FC<ArticuloSec> = ({ option }) => {
  const [lists, setLists] = useState<ArticuloData[] | null>(null);

  useEffect(() => {
    async function fetchSecc() {
      if (option !== null) {
        const data = await loadArticulosCensos({ id: option });
        if (data) {
          setLists(data.data);
        }
      }
    }
    fetchSecc();
  }, [option]);

  return (
    <>
      {lists && lists.length > 0 ? (
        <div className="flex flex-col items-center py-8">
          <h1 className="w-3/5 py-8 mb-4 border-b-4 text-xl font-sans leading-none tracking-tight text-gray-900 md:text-5xl dark:text-white">
            {lists[0].attributes.Titulo}
          </h1>
          <p
            className="mb-3 py-8 w-3/5 text-gray-500 dark:text-gray-400"
            dangerouslySetInnerHTML={{ __html: lists[0].attributes.parrafos }} // Cambiado de 'parrafo' a 'parrafos'
          />
          {lists[0].attributes.contenido.data !== null && (
            <img
              src={`http://www-backend.desa.estadistica.ec.gba.gov.ar${findBestImage(
                lists[0].attributes.contenido.data
              )}`}
              className="py-8 mb-20 rounded-lg shadow-xl dark:shadow-gray-800"
              alt="imagen"
            />
          )}
          {lists[0].attributes.TituloCuadro && (
            <>
              <div className="w-full bg-cyan-400 px-2 py-2 mb-4 font-sans leading-none tracking-tight text-gray-900 dark:text-white">
                <h4 className="ml-36 font-bold">
                  {lists[0].attributes.TituloCuadro}
                </h4>
              </div>
              <div
                className="mb-3 w-3/5 text-gray-500 dark:text-gray-400"
                dangerouslySetInnerHTML={{
                  __html: lists[0].attributes.cuadros // Cambiado de 'Cuadros' a 'cuadros'
                }}
              />
            </>
          )}
          {lists[0].attributes.TituloInforme && (
            <>
              <div className="w-full bg-cyan-400 px-2 py-2 mb-4 font-sans leading-none tracking-tight text-gray-900 dark:text-white">
                <h4 className="ml-36 font-bold">
                  {lists[0].attributes.TituloInforme}
                </h4>
              </div>
              <div
                className="mb-3 w-3/5 text-gray-500 hover:text-red-600"
                dangerouslySetInnerHTML={{
                  __html: lists[0].attributes.indformes // Cambiado de 'Informes' a 'indformes'
                }}
              />
            </>
          )}
        </div>
      ) : (
        'Servidor no encontrado.'
      )}
    </>
  );
};

export default ArticuloCenso;
