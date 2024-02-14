'use client';
import React from 'react';
import Articulo from '@/components/Secciones';

export default function Secciones({ params }: { params: { id: number } }) {
  return (
    <>
      <Articulo option={params.id} />
    </>
  );
}
