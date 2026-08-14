import React from 'react';
import Container from '../ui/Container';
import { footerLinks } from '../../data/navigation';
import { Scale, MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-950 text-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center py-12 md:py-16">
          {/* Lado izquierdo: Logo */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-12 lg:pr-16 mb-12 md:mb-0">
            <div 
              className="inline-block cursor-pointer"
              onClick={() => {
                if (window.location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  window.location.href = '/';
                }
              }}
            >
              <Logo variant="light" />
            </div>
          </div>
          
          {/* Línea divisoria */}
          <div className="hidden md:block w-px h-28 bg-primary-800/60"></div>
          <div className="md:hidden w-32 h-px bg-primary-800/60 mb-12"></div>
          
          {/* Lado derecho: Contacto */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-12 lg:pl-16">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary-800/50 p-2 rounded-lg mr-4">
                    <MapPin className="h-5 w-5 text-accent-500" />
                  </div>
                  <span className="text-neutral-300 mt-1 max-w-xs leading-relaxed">Blvd. Miguel de Cervantes Saavedra No. 466, Colonia: Irrigación, C.P. 11500 Ciudad de México</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-primary-800/50 p-2 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-accent-500" />
                  </div>
                  <a href="tel:+525555570107" className="text-neutral-300 hover:text-white transition-colors">(01 55) 5557 0107</a>
                </li>
                <li className="flex items-center">
                  <div className="bg-primary-800/50 p-2 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-accent-500" />
                  </div>
                  <a href="mailto:contacto@notaria36cdmx.com" className="text-neutral-300 hover:text-white transition-colors">contacto@notaria36cdmx.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-800 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
          <p>&copy; {currentYear} Notaría 36 CDMX. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="/aviso-de-privacidad" className="hover:text-accent-500 transition-colors font-medium">Aviso de Privacidad</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
