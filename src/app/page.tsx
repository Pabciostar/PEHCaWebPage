'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Asegúrate de tener este componente de shadcn

const servicios = [
  {
    label: "En nombre de PEHCa!",
    items: ["Conceptualización", "Diseño de experiencias", "Dirección creativa"],
    videoSrc: "/videos/servicios/sernatur.mp4",
  },
  {
    label: "PEHCa! con acción",
    items: ["Producción técnica", "Escenografías / Stands", "Realización audiovisual"],
    videoSrc: "/videos/servicios/scotiaidea.mp4",
  },
  {
    label: "PEHCa! por tu evento",
    items: ["Charlas", "Lanzamientos", "Activaciones de marca"],
    videoSrc: "/videos/servicios/streaming.mp4",
  },
  {
    label: "PEHCa! desde cero",
    items: ["Proyectos especiales"],
    videoSrc: "/videos/servicios/scotiaplay.mp4",
  }
];

const phrases = [
  "Somos realizadores de acciones de comunicación que conectan marcas con personas.",
  "Somos realizadores de acciones de comunicación que conectan marcas con personas.",
];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" fill="currentColor" viewBox="0 0 448 512" {...props}>
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-26.7l-7.1-4.2-73.3 19.3 19.3-71.6-4.7-7.5c-19.1-30.1-29.6-65.4-29.6-101.9 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const clienteLogos = [
  "/images/clientes/logo-ballerina.webp",
  "/images/clientes/logo-rayfilter.webp",
  "/images/clientes/logo-scotiabank.webp",
  "/images/clientes/logo-albemarle.webp",
  "/images/clientes/logo-babyLee.webp",
  "/images/clientes/logo-direcTV.webp",
  "/images/clientes/logo-sernatur.webp",
];



const teamImages = [
  { src: "/images/nosotros/Ballerina.webp", caption: "Diseñamos y desarrollamos presencia de marcas en ferias o eventos" },
  { src: "/images/nosotros/Foto1.webp", caption: "Conectamos marcas con personas a través del juego o el humor" },
  { src: "/images/nosotros/Foto2.webp", caption: "Ejecutamos jornadas de recreación, convenciones temáticas y charlas para organizaciones." },
  { src: "/images/nosotros/Foto3.webp", caption: "Producimos integralmente acciones de comunicación con alto despliegue técnico." },
  { src: "/images/nosotros/Foto4.webp", caption: "Hacemos eventos corporativos y proyectos especiales." },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4500); // Cambia de frase cada 4.5 segundos

    return () => clearInterval(phraseInterval);
  }, []);

  // Funciones de navegación
  const nextSlide = useCallback(() => {
    setCurrentImage((prev) => (prev === teamImages.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? teamImages.length - 1 : prev - 1));
  };

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(timer);
  }, [nextSlide]);

  const infiniteLogos = [...clienteLogos, ...clienteLogos, ...clienteLogos];

  return (
    <div className="flex flex-col bg-background text-foreground selection:bg-primary selection:text-white">
      <Header />

      <main className="flex-1">
        {/* 1. INICIO*/}
        <section
          id="inicio"
          // mt-20 empuja la sección hacia abajo los 80px que mide el Navbar
          // h-[calc(100vh-80px)] hace que el alto sea el resto exacto de la pantalla
          className="relative h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden bg-black mt-20"
        >
          {/* CAPA 1: VIDEO DE FONDO (Ocupa el 100% de la pantalla, no importa si se corta o desproporciona) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              // Usamos object-cover para que llene todo el espacio sin dejar barras negras laterales
              className="absolute w-full h-full object-cover opacity-100"
            >
              <source src="/videos/pehca-hero-fondo.mp4" type="video/mp4" />
            </video>

            {/* Capa de contraste sutil opcional (elimínala si quieres el fondo 100% limpio y brillante) */}
            {/* <div className="absolute inset-0 bg-black/10" /> */}
          </div>

          {/* CAPA 2: VIDEO DE LOGOS Y TEXTO (Flota encima en su proporción perfecta, NUNCA se desproporciona) */}
          <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              // object-contain asegura que mantenga su relación de aspecto original (16:9 por ejemplo) en cualquier pantalla
              className="max-w-full max-h-full object-contain "
            >
              <source src="/videos/pehca-hero-logos.mp4" type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          </div>
        </section>

        {/* 2. QUIENES SOMOS: CON CARRUSEL PRO */}
        <motion.section
          id="nosotros"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="min-h-screen flex items-center justify-center py-20 bg-white"
        >
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

            {/* TEXTO */}
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-primary italic tracking-tighter leading-none">
                PEHCa! <br />
                <span className="text-black not-italic font-black text-3xl sm:text-5xl md:text-8xl">con Nosotros</span>
              </h2>
              <div className="space-y-6 text-xl leading-relaxed text-muted-foreground">
                <p className="font-bold text-2xl text-foreground underline decoration-primary decoration-4 underline-offset-8">
                  Cuando una idea aparece... PEHCa! con todo!
                </p>
                <p>Lideramos equipos para desarrollar y ejecutar ideas de comunicación interna para empresas, RSE y programas de liderazgo, capacitaciones vía streaming, registro y producción audiovisual; campañas y activaciones de marca.</p>

                {/* LOOP DE 3 FRASES DINÁMICAS */}
                <div className="border-l-8 border-primary bg-secondary/20 min-h-[140px] sm:min-h-[100px] flex items-center overflow-hidden px-6 py-6">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentPhrase} // Clave fundamental para que Framer Motion detecte el cambio de texto
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="italic text-foreground font-medium text-lg md:text-xl leading-snug"
                    >
                      {phrases[currentPhrase]}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <p className="text-primary font-black text-3xl italic tracking-tighter">Palabra de PEHCa!</p>
              </div>
            </div>

            {/* CARRUSEL DE IMÁGENES: AJUSTADO */}
            <div className="relative group w-full max-w-xl mx-auto lg:max-w-none">
              {/* Contenedor con tamaño controlado */}
              <div className="relative aspect-[4/3] md:aspect-video lg:aspect-square max-h-[500px] overflow-hidden border-8 border-primary shadow-[15px_15px_0px_0px_rgba(var(--primary-rgb),0.2)] bg-black mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={teamImages[currentImage].src}
                      fill
                      alt="PEHCa Proyectos"
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>



                {/* Botones Manuales (Solo visibles al hacer hover o en móvil) */}
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    onClick={(e) => { e.preventDefault(); prevSlide(); }}
                    variant="ghost"
                    size="icon"
                    className="bg-primary/80 hover:bg-primary text-white rounded-none w-12 h-12"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </Button>
                  <Button
                    onClick={(e) => { e.preventDefault(); nextSlide(); }}
                    variant="ghost"
                    size="icon"
                    className="bg-primary/80 hover:bg-primary text-white rounded-none w-12 h-12"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </Button>
                </div>

                {/* Indicadores (Dots) */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                  {teamImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`h-2 transition-all duration-300 ${currentImage === i ? "w-8 bg-primary" : "w-2 bg-white/50"
                        }`}
                    />
                  ))}
                </div>


              </div>
              {/* PIE DE FOTO DINÁMICO (Agregado debajo del cuadro) */}
              <div className="mt-8 bg-primary/10 border-l-4 border-primary p-4 min-h-[80px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentImage} // Para que el texto también anime su entrada
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm font-black uppercase tracking-widest text-primary italic"
                  >
                    {teamImages[currentImage].caption}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </motion.section>

        {/* 3. QUÉ HACEMOS: CARDS CON PREVIEW DE VIDEO + MODAL */}
        <section id="hacemos" className="min-h-screen flex items-center justify-center py-20 bg-secondary/10">
          <div className="container mx-auto px-4">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-black text-center mb-20 italic tracking-tighter"
            >
              PEHCa! Por una idea
            </motion.h2>

            {/* Grid responsivo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicios.map((cat, idx) => (
                <motion.div
                  key={idx}
                  className="h-full group"
                >
                  <Card className="h-full border-none bg-background shadow-2xl rounded-none ring-1 ring-primary/10 overflow-hidden flex flex-col transition-all duration-300 hover:ring-primary/30">
                    <CardContent className="p-0 flex flex-col h-full">

                      {/* Contenedor de texto */}
                      <div className="p-8 flex-1 min-h-[190px]">
                        <div className="flex flex-col border-b-4 border-primary pb-4">
                          <h3 className="font-black text-xl text-primary italic leading-tight">
                            {cat.label}
                          </h3>
                        </div>

                        {/* Lista de ítems */}
                        <ul className="space-y-4 pt-6">
                          {cat.items.map((item) => (
                            <li key={item} className="text-sm font-bold flex items-start gap-3 tracking-tight uppercase text-foreground">
                              <span className="mt-1.5 w-2 h-2 bg-primary shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Mini-Video interactivo en vez de Imagen (Actúa como detonador del Modal) */}
                      <div
                        onClick={() => setActiveVideo(cat.videoSrc)}
                        className="relative h-48 w-full overflow-hidden bg-black mt-auto cursor-pointer group/video"
                      >
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                        >
                          <source src={cat.videoSrc} type="video/mp4" />
                        </video>

                        {/* Overlay con icono de Play que aparece en Hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-black tracking-widest text-sm bg-primary px-4 py-2 uppercase italic">
                            Ver más ▶
                          </span>
                        </div>
                      </div>

                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* INTERFAZ DEL MODAL (ANHEDADA AL FINAL DE LA SECCIÓN) */}
          <AnimatePresence>
            {activeVideo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveVideo(null)} // Cierra al hacer clic en el fondo gris
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-md"
              >
                <motion.div
                  initial={{ scale: 0.95, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 20 }}
                  onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic dentro del video
                  className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl overflow-hidden"
                >
                  {/* Botón de Cerrar */}
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="absolute top-4 right-4 z-10 bg-primary text-white font-black px-4 py-2 text-sm uppercase italic hover:bg-white hover:text-black transition-colors"
                  >
                    ✕
                  </button>

                  {/* Video en Alta Resolución */}
                  <video
                    autoPlay
                    controls
                    playsInline
                    className="w-full h-full object-contain"
                    key={activeVideo} // Fuerza la recarga del elemento al cambiar de video
                  >
                    <source src={activeVideo} type="video/mp4" />
                    Tu navegador no soporta videos.
                  </video>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* 4. CLIENTES: INFINITE MARQUEE (TREN DE LOGOS) */}
        <section id="clientes" className="min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden bg-white">
          <div className="container mx-auto px-4 text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-extrabold italic tracking-tighter text-primary">
              PEHCa! como ellos
            </h2>
          </div>

          <div className="relative flex w-full overflow-hidden py-10 border-y border-primary/10 bg-secondary/5">
            <motion.div
              className="flex whitespace-nowrap gap-16 md:gap-24 items-center"
              animate={{
                // El truco: movemos el 100% de UN set de logos, no de todo el div
                x: [0, "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15, // Ajusta esto para velocidad (menos es más rápido)
                  ease: "linear",
                },
              }}
              style={{ width: "fit-content" }} // Obligatorio para que el % funcione
            >
              {/* Usamos una lista duplicada para que cuando el primero salga, el segundo ya esté ahí */}
              {infiniteLogos.map((logo, idx) => (
                <div
                  key={idx}
                  className="relative flex-shrink-0 w-48 h-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                >
                  <Image src={logo} alt="Cliente" fill className="object-contain" />
                </div>
              ))}
            </motion.div>

            {/* Sombras laterales para el efecto de desvanecimiento */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </div>
        </section>

        {/* 5. CONTACTO: FINAL IMPACTANTE */}
        <motion.section
          id="contacto"
          className="min-h-screen flex items-center justify-center bg-primary text-primary-foreground py-20"
        >
          <div className="container mx-auto px-4 text-center space-y-12">
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="text-7xl md:text-9xl font-black italic tracking-tighter"
            >
              PEHCa! Ya!
            </motion.h2>
            <p className="text-2xl md:text-4xl font-bold tracking-widest opacity-90">contacto@agenciapehca.cl </p>
            <div className="pt-8">
              <Button
                size="lg"
                asChild
                // Quitamos px-12 y py-12 fijos. Ahora escalan de forma responsiva.
                className="bg-white text-black hover:bg-black hover:text-white text-lg md:text-3xl px-6 py-8 md:px-12 md:py-12 rounded-none font-black transition-all transform hover:scale-105 md:hover:scale-110 shadow-2xl w-full sm:w-auto"
              >
                <a href="https://wa.me/56982397461" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 md:gap-4">
                  {/* El icono también se adapta: w-6 en móvil, w-10 en desktop */}
                  <WhatsAppIcon className="w-6 h-6 md:w-10 md:w-10 shrink-0" />
                  <span className="truncate">PEHCa! POR WHATSAPP</span>
                </a>
              </Button>
            </div>
          </div>
        </motion.section>

      </main>

      <Footer />
    </div>
  );
}