// components/Informes.tsx

'use client';
import React, { useState, useEffect } from 'react';
import { loadInformes } from '@/app/api/informe';

interface InformeProps {
  id_s: number;
}

interface InformeData {
  id: number;
  attributes: {
    Titulo: string;
    contenido: string;
    id_art: string;
  };
}

const Informes: React.FC<InformeProps> = ({ id_s }) => {
  const [lists, setLists] = useState<InformeData[] | null>(null);

  useEffect(() => {
    async function fetchSecc() {
      const data = await loadInformes({ id: id_s });

      if (data) {
        setLists(data.data);
      }
    }
    if (id_s !== null) {
      fetchSecc();
    }
  }, [id_s]);

  return (
    <>
      {lists && lists.length > 0 ? (
        <div className="flex flex-col items-center py-8">
          <h1 className="w-3/5 py-8 mb-4 border-b-4 text-2xl font-sans leading-none tracking-tight text-gray-900 dark:text-white">
            {lists[0].attributes.Titulo}
          </h1>

          <p
            className="mb-3 py-8 w-3/5 text-gray-500 dark:text-gray-400 informesContent"
            dangerouslySetInnerHTML={{ __html: lists[0].attributes.contenido }}
          />
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Informes;
