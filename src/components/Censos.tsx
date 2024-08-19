import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { loadCensos } from '@/app/api/censoSecc';

interface CensosProps {
  option: number | null;
}

interface CensosData {
  id: number;
  attributes: {
    id_categoria: number;
    cat_nombre: string;
    caratula: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText?: string | null;
          caption?: string | null;
          width: number;
          height: number;
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
  imageData: CensosData['attributes']['caratula']['data']
): string | null => {
  const availableFormats: Array<
    keyof CensosData['attributes']['caratula']['data'][0]['attributes']['formats']
  > = ['large', 'medium', 'small', 'thumbnail'];

  for (const format of availableFormats) {
    const image = imageData.find(
      (item) => item.attributes.formats && item.attributes.formats[format]
    );
    if (image && image.attributes.formats[format]) {
      const imageUrl = image.attributes.formats[format].url;
      return imageUrl.startsWith('http')
        ? imageUrl
        : `${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`;
    }
  }

  return null;
};

const Censos: React.FC<CensosProps> = ({ option }) => {
  const [lists, setLists] = useState<CensosData[]>([]);

  useEffect(() => {
    async function fetchSMenu() {
      if (option !== null) {
        try {
          const data = await loadCensos({ id: option });
          if (data) {
            setLists(data.data);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
    fetchSMenu();
  }, [option]);

  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-4 gap-10 w-3/5 mt-12 mb-40">
        {lists.length > 0 ? (
          lists.map((censo: CensosData) => (
            <div
              key={censo.id}
              className="w-44 h-44 bg-white rounded-lg shadow-xl p-7"
            >
              <div className="flex items-center justify-center">
                <Link href={`/censos/${option}/secciones/${censo.id}`}>
                  <img
                    className="w-40 h-32"
                    src={findBestImage(censo.attributes.caratula.data) || ''}
                    alt={censo.attributes.cat_nombre}
                  />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
};

export default Censos;
