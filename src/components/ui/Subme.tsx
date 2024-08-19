import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { loadSubMenu } from '@/app/api/sub_menu';
import Articulo from '@/app/estadisticas/[id]/page';
import Articulos from '@/components/Secciones';

interface SubmeProps {
  option: number | null;
}

interface SubEstadistica {
  id: number;
  nombre: string;
  cid_cat: {
    id_s: number;
    nombre_sub_c: string;
  }[];
}

const Subme: React.FC<SubmeProps> = ({ option }) => {
  const [lists, setLists] = useState<any>(null);
  const [arts, setArts] = useState<any[]>([]);
  const [currentIdS, setCurrentIdS] = useState<number | null>(null);

  useEffect(() => {
    async function fetchSMenu() {
      if (option !== null) {
        const data = await loadSubMenu({ id: option });
        setLists(data[0].obtener_subcategorias);
        setArts(data[0].obtener_subcategorias);
        // Limpiar el id_s actual al cambiar la opción
        setCurrentIdS(null);
      }
    }
    fetchSMenu();
  }, [option]);

  const handleLinkClick = (id_s: number) => {
    setCurrentIdS(id_s);
  };
  const renderArticulo = () => {
    if (currentIdS !== null) {
      return <Articulo id_s={currentIdS} />;
    }
    return null;
  };

  return (
    <>
      {lists &&
        lists.map((estadistica: SubEstadistica) => (
          <div
            key={estadistica.id}
            className="flex w-screen bg-gray-500 h-[10vw]"
          >
            <div className="flex w-1/2  p-4 justify-center mt-6">
              <h1 className=" text-white  text-[3vw]">{estadistica.nombre}</h1>
            </div>
            <div className="flex flex-wrap w-1/2 p-4 ">
              {estadistica.cid_cat &&
                estadistica.cid_cat.map((categoria) => (
                  <div
                    key={categoria.id_s}
                    className="
                cursor-pointer
                flexbox
                flex
                justify-center
                items-center
                h-[3.5vw]
                text-[1vw]
                w-[15vw]
                m-1
                text-white
                bg-gray-800 
                border           
                border-slate-900  
                rounded-md
                hover:bg-sky-400  
                p-5
                "
                    onClick={() => handleLinkClick(categoria.id_s)}
                  >
                    {categoria.nombre_sub_c}
                  </div>
                ))}
            </div>
          </div>
        ))}
      {/* {arts.length > 0 && (
        <Articulo id_s={currentIdS ?? arts[0]?.cid_cat[0]?.id_s} />
      )} */}
      {arts.length > 0 && arts[0]?.cid_cat?.length > 0 && (
        <Articulo id_s={currentIdS ?? arts[0].cid_cat[0].id_s} />
      )}
    </>
  );
};

export default Subme;
