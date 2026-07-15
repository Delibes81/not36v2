import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Award, ShieldCheck, Users, Clock, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="nosotros" className="bg-neutral-50 py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle 
              title="Sobre Nuestra Notaría"
              subtitle="32 años brindando certeza jurídica"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              ref={ref}
            >
              <p className="text-lg text-neutral-700">
               A cargo del Notario Jorge F. Caraza Pinto, siempre dispuesto a atender al cliente de manera personalizada, manteniendo el prestigio que la caracteriza, brindando una gran cantidad de servicios de manera integral, oportuna y eficiente.
              </p>
              
              <p className="mt-4 text-lg text-neutral-700">
                En la Notaría 36 el acceso al Notario es absoluto, el trato es personal y se tiene contacto con él de forma inmediata por diversos conductos: mediante cita, por teléfono o vía correo electrónico.
              </p>
              
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary-100 p-2">
                    <ShieldCheck className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-900">Certeza Jurídica</h4>
                    <p className="mt-1 text-sm text-neutral-600">Garantizamos la seguridad legal en todos sus trámites</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary-100 p-2">
                    <Users className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-900">Atención Personalizada</h4>
                    <p className="mt-1 text-sm text-neutral-600">Cada cliente recibe un servicio a su medida</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary-100 p-2">
                    <Award className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-900">Excelencia</h4>
                    <p className="mt-1 text-sm text-neutral-600">Profesionalismo y calidad en cada servicio</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary-100 p-2">
                    <Clock className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-900">Eficiencia</h4>
                    <p className="mt-1 text-sm text-neutral-600">Optimizamos tiempos sin comprometer calidad</p>
                  </div>
                </div>
              </div>
              

            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block h-full min-h-[500px]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] rounded-full bg-primary-50/50 -z-10" />
            
            {/* Imagen Principal (Atrás) */}
            <div className="absolute right-0 top-0 w-4/5 h-[400px] z-10 overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
              <img 
                src="/optimized/IMG_0257.webp" 
                alt="Notaría 36 Instalaciones" 
                className="h-full w-full object-cover"
              />
            </div>

            {/* Imagen Secundaria (Adelante) */}
            <div className="absolute left-0 bottom-0 w-3/5 h-[320px] z-20 overflow-hidden rounded-2xl shadow-xl border-8 border-white">
              <img 
                src="/optimized/IMG_0263.webp" 
                alt="Equipo Notaría 36" 
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* Decorativo */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-accent-100 z-0" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
