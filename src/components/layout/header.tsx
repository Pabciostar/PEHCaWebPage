'use client';
import { useState } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "PEHCa! con Nosotros", href: "#nosotros" },
  { name: "PEHCa! Por una idea", href: "#hacemos" },
  { name: "PEHCa! como ellos", href: "#clientes" },
  { name: "Contacto", href: "#contacto" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">


        {/* LOGO */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          className="z-[60] block" // Cambiado a 'block' para aislarlo del flex principal
        >
          {/* Contenedor forzado a columna estricta */}
          <div className="flex flex-col items-start justify-center">

            {/* LA PALABRA "AGENCIA" ARRIBA */}
            <span className="text-[6px] md:text-xs font-black text-primary leading-none mb-1 pl-0.5">
              Agencia
            </span>

            {/* EL LOGO ABAJO */}
            <div className="relative w-28 h-9 md:w-40 md:h-12 -mt-1 md:-mt-1.5">
              <Image
                src="/images/LogosOKPehcasinfondo.png"
                alt="PEHCa Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>

          </div>
        </motion.a>

        {/* NAV DESKTOP COMENTADA
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-sm font-bold tracking-widest text-foreground/80 transition-colors hover:text-primary group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Button asChild className="bg-primary text-primary-foreground font-black hover:scale-105 transition-transform px-6">
            <a href="#contacto">PEHCa! Ya!</a>
          </Button>
        </nav>
        */}

        {/* CONTROLES GLOBALES (Visible en todos los tamaños) */}
        <div className="flex items-center gap-4 z-[60]">
          {/* Botón ¡YA! visible siempre en PC y móvil */}
          <Button asChild size="sm" className="bg-primary font-black text-xs px-4 md:px-6 md:text-sm">
            <a href="#contacto">PEHCa! YA!</a>
          </Button>

          {/* <button 
            onClick={toggleMenu}
            className="text-primary p-1 focus:outline-none hover:scale-110 transition-transform"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={38} /> : <Menu size={38} />}
          </button> */}
        </div>

        {/* MENU OVERLAY (Panel lateral en PC, Fullscreen en móvil) */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Fondo oscuro traslúcido (Backdrop) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[50]"
              />

              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 w-full md:w-[450px] h-screen bg-background z-[55] shadow-2xl flex flex-col items-center justify-center gap-10 p-10"
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ x: -10 }}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl md:text-4xl font-black italic text-primary uppercase tracking-tighter hover:text-foreground transition-colors text-center"
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Decoración inferior estilo PEHCa! */}
                <div className="mt-10 border-t-4 border-primary pt-6 w-full text-center">
                  <p className="text-primary font-black italic tracking-widest text-sm">PALABRA DE PEHCa!</p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}