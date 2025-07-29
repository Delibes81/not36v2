import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contacto" className="bg-white py-20">
      <Container>
        <SectionTitle
          title="Contacto"
          subtitle="Estamos para atenderle. Contáctenos para agendar una cita o resolver cualquier duda."
          centered
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          {/* Combined Information and Contact Form */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-8">
            <div className="rounded-lg bg-primary-50 p-6 shadow-md">
              <h3 className="font-heading text-2xl font-semibold text-primary-900 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary-100 p-2">
                    <MapPin className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-900">Dirección</h4>
                    <p className="mt-1 text-neutral-600">
                      Blvd. Miguel de Cervantes Saavedra No. 466<br />
                      Colonia: Irrigación<br />
                      C.P. 11500 Ciudad de México
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary-100 p-2">
                    <Phone className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-900">Teléfono</h4>
                    <p className="mt-1 text-neutral-600">(01 55) 5557 0107</p>
                    <p className="mt-1 text-sm text-neutral-500">Conmutador a 5 líneas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary-100 p-2">
                    <Clock className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-900">Horario de Atención</h4>
                    <p className="mt-1 text-neutral-600">
                      Lunes a Viernes: 9:00 - 18:00<br />
                      Sábados: 9:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="font-heading text-2xl font-semibold text-primary-900 mb-6">
                Envíenos un Mensaje
              </h3>
              
              <form>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      placeholder="Su nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      placeholder="su.correo@ejemplo.com"
                    />
                  </div>
                </div>
                
                <div className="mt-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="(55) 1234-5678"
                  />
                </div>
                
                <div className="mt-4">
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-700">
                    Servicio de Interés
                  </label>
                  <select
                    id="service"
                    className="mt-1 block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  >
                    <option value="">Seleccione un servicio</option>
                    <option value="compraventa">Compraventa de Inmuebles</option>
                    <option value="testamentos">Testamentos</option>
                    <option value="sociedades">Constitución de Sociedades</option>
                    <option value="poderes">Poderes Notariales</option>
                    <option value="tramites">Trámites Sucesorios</option>
                    <option value="asesoria">Asesoría Patrimonial</option>
                    <option value="otros">Otros</option>
                  </select>
                </div>
                
                <div className="mt-4">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="Escriba su mensaje aquí..."
                  ></textarea>
                </div>
                
                <div className="mt-6">
                  <Button variant="secondary" className="w-full">
                    Enviar Mensaje
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-8">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="font-heading text-2xl font-semibold text-primary-900 mb-6 flex items-center">
                <MapPin className="mr-3 h-6 w-6 text-primary-700" />
                Ubicación
              </h3>
              
              <div className="w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5!2d-99.1877!3d19.4378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5b5b5b5%3A0x1234567890abcdef!2sBlvd.%20Miguel%20de%20Cervantes%20Saavedra%20466%2C%20Irrigaci%C3%B3n%2C%2011500%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2smx!4v1640000000000!5m2!1sen!2smx"
                  className="h-96 w-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Notaría 36 - Blvd. Miguel de Cervantes Saavedra 466, Irrigación"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Email Contacts Section */}
          <div className="mb-8">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="font-heading text-2xl font-semibold text-primary-900 mb-6 flex items-center">
                <Mail className="mr-3 h-6 w-6 text-primary-700" />
                Directorio de Correos Electrónicos
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h4 className="font-medium text-primary-900 mb-1">Notario Jorge F. Caraza Pinto</h4>
                  <a href="mailto:jcaraza@notaria36cdmx.com" className="text-sm text-primary-700 hover:text-primary-800">
                    jcaraza@notaria36cdmx.com
                  </a>
                </div>
                
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h4 className="font-medium text-primary-900 mb-1">Arturo Aguilar</h4>
                  <a href="mailto:aaguilar@notaria36cdmx.com" className="text-sm text-primary-700 hover:text-primary-800">
                    aaguilar@notaria36cdmx.com
                  </a>
                </div>
                
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h4 className="font-medium text-primary-900 mb-1">Ángela López</h4>
                  <a href="mailto:alopez@notaria36cdmx.com" className="text-sm text-primary-700 hover:text-primary-800">
                    alopez@notaria36cdmx.com
                  </a>
                </div>
                
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h4 className="font-medium text-primary-900 mb-1">María Elena Garcia</h4>
                  <a href="mailto:egarcia@notaria36cdmx.com" className="text-sm text-primary-700 hover:text-primary-800">
                    egarcia@notaria36cdmx.com
                  </a>
                </div>
                
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h4 className="font-medium text-primary-900 mb-1">Hugo Paredes</h4>
                  <a href="mailto:hparedes@notaria36cdmx.com" className="text-sm text-primary-700 hover:text-primary-800">
                    hparedes@notaria36cdmx.com
                  </a>
                </div>
                
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h4 className="font-medium text-primary-900 mb-1">Luis E. Neda</h4>
                  <a href="mailto:lneda@notaria36cdmx.com" className="text-sm text-primary-700 hover:text-primary-800">
                    lneda@notaria36cdmx.com
                  </a>
                </div>
                
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h4 className="font-medium text-primary-900 mb-1">María Sanchez</h4>
                  <a href="mailto:msanchez@notaria36cdmx.com" className="text-sm text-primary-700 hover:text-primary-800">
                    msanchez@notaria36cdmx.com
                  </a>
                </div>
                
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h4 className="font-medium text-primary-900 mb-1">Rosa Garcia</h4>
                  <a href="mailto:rgarcia@notaria36cdmx.com" className="text-sm text-primary-700 hover:text-primary-800">
                    rgarcia@notaria36cdmx.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;