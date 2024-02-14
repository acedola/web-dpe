'use client'
import '@/app/globals.css';
import "@/app/styles/institucional.css";
import "@/app/styles/autoridades.css";
import "@/app/styles/contacto.css";
import React, { useState } from 'react';  
import { Navigation } from "@/components/Navigation";
import { Main_Menu } from "@/components/Menu_main";

import { Footer } from "@/components/Footer";
import { Baner } from '@/components/Baner';



export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head></head>
      <body>
        <Navigation />
        <Baner/>
        <Main_Menu />
        {children}
        <Footer />
        {/* Renderizar Subme solo si se ha seleccionado una opción */}
        
      </body>
    </html>
  );
}
