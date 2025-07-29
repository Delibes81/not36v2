import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { Target, Eye, ShieldCheck } from 'lucide-react';

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
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          <motion.div
            variants={item}
            className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md h-full flex flex-col"
          >
            <div className="mb-4 inline-flex rounded-full bg-primary-100 p-3 text-primary-700">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mb-3 font-heading text-xl font-semibold text-primary-900">
              Misión
            </h3>
            <div className="flex-grow">
              <p className="text-neutral-600">
                Brindar a la sociedad certeza jurídica y la seguridad necesaria, derivada de la investidura que el Estado les otorga a los notarios, a través de un servicio integral, eficaz, puntual y dinámico para redactar, conservar, reproducir y dar forma legal a los instrumentos de los actos y hechos en los que da fe.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            variants={item}
            className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md h-full flex flex-col"
          >
            <div className="mb-4 inline-flex rounded-full bg-gold-100 p-3 text-gold-700">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mb-3 font-heading text-xl font-semibold text-primary-900">
              Visión
            </h3>
            <div className="flex-grow">
              <p className="text-neutral-600">
                Adecuarse a los constantes cambios de nuestra sociedad mediante un servicio preciso y accesible, apoyado en la estructura legal del País y en los mejores sistemas de información, dentro de un ambiente de confianza y comunicación que permita darles a nuestros clientes un servicio de calidad.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            variants={item}
            className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md h-full flex flex-col sm:col-span-2 lg:col-span-1"
          >
            <div className="mb-4 inline-flex rounded-full bg-green-100 p-3 text-green-700">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="mb-3 font-heading text-xl font-semibold text-primary-900">
              Control Interno
            </h3>
            <div className="flex-grow">
              <p className="text-neutral-600">
                En la notaría 36 usted tiene la certeza que TODOS los instrumentos que ante el Notario se otorgan son revisados por él, lo que le garantiza la seguridad jurídica que la función notarial demanda.
              </p>
            </div>
          </motion.div>
      </Container>
    </section>
  );
};

export default Team;
  )
}