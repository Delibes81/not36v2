import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { services } from '../../data/services';
import * as LucideIcons from 'lucide-react';

const ServiceImageSlider = ({ images, title, globalTick, index }: { images: string[], title: string, globalTick: number, index: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    // El ciclo total es de 10 ticks a 500ms cada uno: 
    // - 4 ticks (2 segundos) para que cambien las 4 tarjetas
    // - 6 ticks (3 segundos) de pausa
    const cycleTick = globalTick % 10;
    
    // Cambia la imagen solo si el tick del ciclo actual coincide con el índice de la tarjeta
    if (globalTick > 0 && cycleTick === index) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  }, [globalTick, index, images.length]);

  return (
    <AnimatePresence initial={false}>
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      />
    </AnimatePresence>
  );
};

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [globalTick, setGlobalTick] = useState(0);

  useEffect(() => {
    // El tick avanza exactamente cada 0.5 segundos (500ms)
    const interval = setInterval(() => {
      setGlobalTick((prev) => prev + 1);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="servicios" className="bg-white py-20">
      <Container>
        <SectionTitle
          title="Nuestros Servicios"
          subtitle="Ofrecemos una amplia gama de servicios notariales con la máxima garantía de seguridad jurídica"
          centered
        />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 max-w-5xl mx-auto"
        >
          {services.map((service, index) => {
            // Dynamically get the icon component
            const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons];
            
            return (
              <motion.div
                key={service.id}
                variants={item}
                className="group rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg h-full flex flex-col"
              >
                {(service.images || service.image) && (
                  <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                    {service.images ? (
                      <ServiceImageSlider images={service.images} title={service.title} globalTick={globalTick} index={index} />
                    ) : (
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="absolute inset-0 h-full w-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-4 right-4 rounded-full bg-white/90 p-2 text-primary-700 shadow-md transform translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {IconComponent && <IconComponent className="h-5 w-5" />}
                    </div>
                  </div>
                )}
                
                <div className="p-6 flex flex-col flex-grow">
                  {(!service.images && !service.image) && (
                    <div className="mb-4 inline-flex rounded-full bg-primary-100 p-3 text-primary-700">
                      {IconComponent && <IconComponent className="h-6 w-6" />}
                    </div>
                  )}
                  
                  <h3 className="mb-3 font-heading text-xl font-semibold text-primary-900 group-hover:text-accent-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <div className="flex-grow">
                    {service.items && service.items.length > 0 ? (
                      <ul className="space-y-2 text-sm text-neutral-600">
                        {service.items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-neutral-600">
                        {service.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;
