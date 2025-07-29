import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-primary-950 bg-hero-pattern bg-cover bg-center bg-no-repeat pt-24"
    >
      <div className="absolute inset-0 bg-primary-950/70" />
      
      <Container className="relative z-10 flex min-h-[calc(100vh-6rem)] flex-col items-start justify-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            <span className="block">Notaría 36</span>
            <span className="block mt-2 text-gold-500">Ciudad de México</span>
          </h1>
          
          <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl">
Nuestro compromiso es atender con prontitud y rectitud a todos nuestros clientes, con calidad y certeza en sus requerimientos de servicios notariales, brindándoles así una atención personalizada con el apoyo del mejor equipo profesional de abogados.
          </p>
          
          <div className="mt-10">
            <Button size="lg" variant="secondary" onClick={scrollToServices}>
              Nuestros Servicios
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;