'use client';
import React from 'react';
import ArticuloCenso from '@/components/ArticuloCenso';

export default function Censos({ params }: { params: { id_s: number } }) {
  const id = params.id_s; // Asegúrate de que el nombre coincida con el que usas en la ruta dinámica

  return (
    <>
      <ArticuloCenso option={id} />
    </>
  );
}
