import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { Target, Eye, ShieldCheck, Users } from 'lucide-react';

const Team: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="equipo" className="bg-white py-20">
      <Container>
        <SectionTitle
          title="Misión y Valores"
          subtitle="Rapidez y atención personalizada en todos sus trámites"
          centered
        />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto"
        >
          <motion.div
            variants={item}
            className="rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col overflow-hidden group"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src="/fotos-Stock/01-asesoria-notarial-pareja.webp" 
                alt="Misión" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent"></div>
              <div className="absolute bottom-4 left-6 bg-white/95 backdrop-blur p-2.5 rounded-xl shadow-md text-primary-700">
                <Target className="h-6 w-6" />
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="mb-3 font-heading text-xl font-semibold text-primary-900">
                Misión
              </h3>
              <div className="flex-grow">
                <p className="text-neutral-600">
                  Brindar a la sociedad certeza jurídica y la seguridad necesaria, derivada de la investidura que el Estado les otorga a los notarios, a través de un servicio integral, eficaz, puntual y dinámico para redactar, conservar, reproducir y dar forma legal a los instrumentos de los actos y hechos en los que da fe.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={item}
            className="rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col overflow-hidden group"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src="/fotos-Stock/05-documentos-pluma-llaves.webp" 
                alt="Visión" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent"></div>
              <div className="absolute bottom-4 left-6 bg-white/95 backdrop-blur p-2.5 rounded-xl shadow-md text-accent-700">
                <Eye className="h-6 w-6" />
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="mb-3 font-heading text-xl font-semibold text-primary-900">
                Visión
              </h3>
              <div className="flex-grow">
                <p className="text-neutral-600">
                  Adecuarse a los constantes cambios de nuestra sociedad mediante un servicio preciso y accesible, apoyado en la estructura legal del País y en los mejores sistemas de información, dentro de un ambiente de confianza y comunicación que permita darles a nuestros clientes un servicio de calidad.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={item}
            className="rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col overflow-hidden group"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src="/fotos-Stock/08-certificacion-documento-sello.webp" 
                alt="Control Interno" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent"></div>
              <div className="absolute bottom-4 left-6 bg-white/95 backdrop-blur p-2.5 rounded-xl shadow-md text-green-700">
                <ShieldCheck className="h-6 w-6" />
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="mb-3 font-heading text-xl font-semibold text-primary-900">
                Control Interno
              </h3>
              <div className="flex-grow">
                <p className="text-neutral-600">
                  En la notaría 36 usted tiene la certeza que TODOS los instrumentos que ante el Notario se otorgan son revisados por él, lo que le garantiza la seguridad jurídica que la función notarial demanda.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={item}
            className="rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col overflow-hidden group"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src="/fotos-Stock/06-abogada-asesoria-telefonica.webp" 
                alt="Nuestro Compromiso" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent"></div>
              <div className="absolute bottom-4 left-6 bg-white/95 backdrop-blur p-2.5 rounded-xl shadow-md text-blue-700">
                <Users className="h-6 w-6" />
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="mb-3 font-heading text-xl font-semibold text-primary-900">
                Nuestro Compromiso
              </h3>
              <div className="flex-grow">
                <p className="text-neutral-600">
                  En la Notaría 36 nuestro compromiso es atender con prontitud y rectitud a todos nuestros clientes, con calidad y certeza en sus requerimientos de servicios notariales, brindándoles así una atención personalizada junto con el apoyo del mejor equipo profesional de Abogados.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Team;
