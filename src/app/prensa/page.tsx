'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { loadPrensa } from '@/app/api/prens';
import Link from 'next/link';

interface PrensaData {
  id: number;
  attributes: {
    Titulo: string;
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
  imageData: PrensaData['attributes']['imagen']['data']
): string | null => {
  const availableFormats: Array<
    keyof PrensaData['attributes']['imagen']['data'][0]['attributes']['formats']
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

const PrensaArt: React.FC = () => {
  const [lists, setLists] = useState<PrensaData[]>([]);

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
            <div key={item.id} className="flex flex-col items-center py-8">
              <h1 className="w-3/4 py-8 mb-4 border-b-4 text-2xl font-sans leading-none tracking-tight text-gray-900  dark:text-white">
                <Link
                  href={`http://www-backend.desa.estadistica.ec.gba.gov.ar${item.attributes.PDF.data[0].attributes.url}`}
                  target="blank"
                  passHref
                >
                  {item.attributes.Titulo}
                </Link>
              </h1>
              <div className="flex flex-row w-3/4">
                {item.attributes.imagen.data !== null && (
                  <img
                    src={`http://www-backend.desa.estadistica.ec.gba.gov.ar${findBestImage(
                      item.attributes.imagen.data
                    )}`}
                    className=" mb-20 w-1/3 "
                    alt="imagen"
                  />
                )}

                <p
                  className="mb-3 px-8 w-3/4 text-gray-500 dark:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: item.attributes.articulo }}
                />
              </div>
            </div>
          ))
        : 'no se encontraron artículos...'}
    </>
  );
};

export default PrensaArt;
