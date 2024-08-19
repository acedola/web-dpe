'use client';

import React from 'react';
import { useCatNombre } from '@/context/CatNombreContext'; // Asegúrate de que la ruta sea correcta

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { catNombre } = useCatNombre(); // Asegúrate de que useCatNombre esté definido y exportado correctamente

  return (
    <div>
      <div className="flex w-screen bg-gray-500 h-[4vw]">
        <div className="flex w-1/3 p-4 justify-center items-center">
          <h1 className="text-white text-[2vw]">
            {catNombre ? `${catNombre}` : 'No Category Selected'}
          </h1>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Layout;
