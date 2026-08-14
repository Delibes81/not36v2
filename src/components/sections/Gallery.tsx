import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../ui/Container';

const galleryImages = [
  { src: '/optimized/exec-166c640c-5679-4e32-8999-44825f00df77.webp', alt: 'Recepción' },
  { src: '/optimized/exec-21579580-8c82-4641-b705-973fd4ed12d9.webp', alt: 'Sala Principal' },
  { src: '/optimized/exec-277c2ae6-e39d-4b43-b9d5-ddfc73ea1d2f.webp', alt: 'Oficinas Privadas' },
  { src: '/optimized/exec-73760112-8a2a-4bb1-936b-cbbcb344122e.webp', alt: 'Sala de Juntas A' },
  { src: '/optimized/exec-815e534e-1315-4e3c-86a8-7030504f03fe.webp', alt: 'Sala de Juntas B' },
  { src: '/optimized/exec-84c802a9-45d3-44f5-aa0e-d9ce19e938b4.webp', alt: 'Área de Asesoría' },
  { src: '/optimized/exec-85f9dcda-3b14-4379-9e64-fa4e446cd21f.webp', alt: 'Sala de Firmas' },
];

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Carrusel Automático
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="instalaciones" className="py-24 bg-neutral-50 overflow-hidden relative">
      <Container>
        <div className="text-center mb-16 relative z-20">
          <h2 className="font-heading text-3xl font-bold text-primary-900 md:text-5xl">
            Nuestras Instalaciones
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-accent-500 rounded-full" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Haga clic en las imágenes o use los botones para explorar los espacios de la notaría.
          </p>
        </div>

        {/* Carrusel Coverflow (Pequeño -> Grande -> Pequeño) */}
        <div className="relative mx-auto w-full max-w-5xl h-[400px] md:h-[600px] flex items-center justify-center">
          
          <AnimatePresence initial={false}>
            {galleryImages.map((img, i) => {
              // Calcular la distancia más corta en un círculo cerrado de 7 elementos
              let diff = (i - activeIndex) % galleryImages.length;
              if (diff > 3) diff -= galleryImages.length;
              if (diff < -3) diff += galleryImages.length;

              const absDiff = Math.abs(diff);
              const isActive = diff === 0;

              // Propiedades matemáticas para el efecto "Coverflow"
              // Cada foto se traslada en X, se encoge (scale) y pierde opacidad según su distancia al centro.
              const xPos = diff * 70; // Se mueve 70% de su propio ancho hacia la izquierda o derecha por unidad de distancia
              const scalePos = 1 - absDiff * 0.2; // 1 (centro), 0.8 (lados), 0.6 (extremos)
              const zIndexPos = 10 - absDiff;
              const opacityPos = 1 - absDiff * 0.3; // 1, 0.7, 0.4
              const blurPos = absDiff > 0 ? `blur(${absDiff * 2}px)` : 'blur(0px)';

              return (
                <motion.div
                  key={i}
                  className="absolute w-[320px] h-[200px] md:w-[650px] md:h-[400px] cursor-pointer rounded-xl overflow-hidden shadow-2xl"
                  onClick={() => setActiveIndex(i)} 
                  initial={false}
                  animate={{
                    x: `${xPos}%`,
                    scale: scalePos,
                    zIndex: zIndexPos,
                    opacity: opacityPos,
                    filter: blurPos,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 18,
                    mass: 1.2
                  }}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
                  />
                  
                  {/* Overlay oscuro para la profundidad de las imágenes inactivas */}
                  <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ${isActive ? 'opacity-0' : 'opacity-40'}`} />
                </motion.div>
              );
            })}
          </AnimatePresence>

        </div>

        {/* Controles del Carrusel */}
        <div className="flex justify-center gap-6 mt-12 relative z-20">
          <button 
            onClick={handlePrev}
            className="p-4 rounded-full bg-white text-primary-900 shadow-md hover:bg-primary-50 hover:shadow-lg transition-all"
            aria-label="Anterior imagen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="p-4 rounded-full bg-white text-primary-900 shadow-md hover:bg-primary-50 hover:shadow-lg transition-all"
            aria-label="Siguiente imagen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </Container>
    </section>
  );
};

export default Gallery;
