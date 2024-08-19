'use client'; // Asegúrate de incluir esto al principio

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CatNombreContextProps {
  catNombre: string;
  setCatNombre: (nombre: string) => void;
}

const CatNombreContext = createContext<CatNombreContextProps | undefined>(
  undefined
);

export const CatNombreProvider = ({ children }: { children: ReactNode }) => {
  const [catNombre, setCatNombre] = useState<string>('');

  return (
    <CatNombreContext.Provider value={{ catNombre, setCatNombre }}>
      {children}
    </CatNombreContext.Provider>
  );
};

export const useCatNombre = () => {
  const context = useContext(CatNombreContext);
  if (context === undefined) {
    throw new Error('useCatNombre must be used within a CatNombreProvider');
  }
  return context;
};
