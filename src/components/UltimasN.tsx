'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { loadPrensa } from '@/app/api/prens';
import Link from 'next/link';

interface NoticiaData {
  id: number;
  attributes: {
    Titulo: string;
    resumen: string;
    articulo: string;
    imagen: {
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
          };
        };
      }[];
    };
    PDF: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      }[];
    };
  };
}

const findBestImage = (
  imageData: NoticiaData['attributes']['imagen']['data']
): string | null => {
  const availableFormats: Array<
    keyof NoticiaData['attributes']['imagen']['data'][0]['attributes']['formats']
  > = ['large', 'medium', 'small'];

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

const NoticiaArt: React.FC = () => {
  const [lists, setLists] = useState<NoticiaData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadPrensa();
        setLists(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Renderizar el componente solo si lists tiene datos
  return (
    <>
      {lists && lists.length > 0
        ? lists.map((item) => (
            <div key={item.id} className="card ultimas-novedades">
              <div>
                <h1 className="w-full py-2 mb-4 border-b-4 font-sans  text-gray-900  dark:text-white">
                  <Link
                    href={`http://www-backend.desa.estadistica.ec.gba.gov.ar${item.attributes.PDF.data[0].attributes.url}`}
                    target="blank"
                    passHref
                  >
                    {item.attributes.Titulo}
                  </Link>
                </h1>
                <div className="flex">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.attributes.resumen
                    }}
                  />
                </div>
              </div>
            </div>
          ))
        : 'no se encontraron artículos...'}
    </>
  );
};

export default NoticiaArt;
