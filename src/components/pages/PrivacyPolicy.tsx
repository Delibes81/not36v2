import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { Shield, Eye, Users, Phone, Mail, MapPin, Calendar } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-primary-100 p-6">
                <Shield className="h-16 w-16 text-primary-700" />
              </div>
            </div>
            <SectionTitle
              title="Aviso de Privacidad"
              subtitle="Protección de Datos Personales conforme a la Ley Federal"
              centered
            />
          </div>

          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="bg-primary-50 rounded-lg p-8 border-l-4 border-primary-500">
              <p className="text-lg text-neutral-700 leading-relaxed">
                La protección de sus datos personales es muy importante para esta Notaría, razón por la cual, este <strong>AVISO DE PRIVACIDAD</strong>, elaborado para dar cumplimiento a la <strong>LEY FEDERAL DE PROTECCIÓN DE DATOS PERSONALES EN POSESIÓN DE LOS PARTICULARES</strong>, tiene como fin informarle el tipo de datos personales que recabamos de Usted, cómo los usamos, manejamos y aprovechamos, y con quién los compartimos.
              </p>
            </div>
          </motion.section>

          {/* What data we collect */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6 flex items-center">
              <Eye className="mr-3 h-6 w-6 text-primary-700" />
              ¿Qué datos personales recabamos de usted?
            </h2>
            
            <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
              <p className="text-neutral-700 mb-4">
                Como cliente de alguno de nuestros servicios le podemos solicitar información personal, que varía según el caso, relativa a:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold-500"></span>
                  <span className="text-neutral-700">Su nombre, dirección, fecha de nacimiento.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold-500"></span>
                  <span className="text-neutral-700">Su correo electrónico y número telefónico.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold-500"></span>
                  <span className="text-neutral-700">Sus datos patrimoniales como cuentas bancarias, créditos, bienes muebles e inmuebles, activos, pasivos, entre otros.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold-500"></span>
                  <span className="text-neutral-700">Información sobre su cónyuge, herederos, legatarios y beneficiarios.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold-500"></span>
                  <span className="text-neutral-700">Comprobantes oficiales que acrediten su identidad y la información que Usted declara, así como su CURP.</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* How we use data */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6 flex items-center">
              <Users className="mr-3 h-6 w-6 text-primary-700" />
              ¿Para qué usamos sus datos personales?
            </h2>
            
            <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
              <p className="text-neutral-700 mb-4">
                Esta Notaría recaba y usa sus datos personales para el cumplimiento de las siguientes finalidades:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                  <span className="text-neutral-700">Confirmar su identidad.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                  <span className="text-neutral-700">Entender y atender sus necesidades de carácter legal de manera notarial.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                  <span className="text-neutral-700">Otorgar seguridad y certeza jurídica a los hechos y actos que celebra, como pueden ser operaciones traslativas de dominio relativas a compraventas, donaciones, permutas, adjudicaciones por herencia, adjudicaciones por remate, fideicomisos, constituciones de regímenes de propiedad en condominio, testamentos, trámites sucesorios, hipotecas, cancelaciones de hipotecas, ratificaciones de firmas, fe de hechos, cotejo de documentos, entre otros.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                  <span className="text-neutral-700">Elaborar los instrumentos notariales de su interés.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                  <span className="text-neutral-700">Brindarle asesoría legal.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                  <span className="text-neutral-700">Cumplir con los requerimientos legales que le son aplicables.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                  <span className="text-neutral-700">Verificar la información que nos proporciona.</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Data sharing */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6">
              ¿Con quién compartimos su información y para qué fines?
            </h2>
            
            <div className="bg-gold-50 border border-gold-200 rounded-lg p-6">
              <p className="text-neutral-700">
                Sus datos personales solo son tratados por el personal adscrito a esta Notaría a efecto de elaborar los instrumentos públicos notariales que Usted solicita, por lo cual, sus datos personales no se transfieren a ningún tercero ajeno a ella, salvo para el cumplimiento de obligaciones legales ante las autoridades competentes tales como los registros públicos, las autoridades tributarias, así como las autoridades judiciales.
              </p>
            </div>
          </motion.section>

          {/* Limiting use */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6">
              ¿Cómo puede limitar el uso o divulgación de su información personal?
            </h2>
            
            <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
              <p className="text-neutral-700 mb-4">
                Usted puede limitar el uso y divulgación de su información personal a través de los siguientes medios que hemos instrumentado:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start p-4 bg-primary-50 rounded-lg">
                  <MapPin className="mr-3 h-5 w-5 text-primary-700 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-700">Presentando su solicitud personalmente en nuestro domicilio dirigida a la persona encargada de la privacidad en esta oficina.</span>
                </div>
                <div className="flex items-start p-4 bg-primary-50 rounded-lg">
                  <Mail className="mr-3 h-5 w-5 text-primary-700 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-neutral-700">
                    <span>Enviando correo electrónico a:</span>
                    <br />
                    <a href="mailto:msanchez@notaria36df.com.mx" className="text-primary-700 hover:text-primary-800 font-medium">msanchez@notaria36df.com.mx</a>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-primary-50 rounded-lg">
                  <Phone className="mr-3 h-5 w-5 text-primary-700 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-neutral-700">
                    <span>Llamando al número telefónico:</span>
                    <br />
                    <a href="tel:+525555570107" className="text-primary-700 hover:text-primary-800 font-medium">(55) 5557-0107</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ARCO Rights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6">
              ¿Cómo acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales?
            </h2>
            
            <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
              <p className="text-neutral-700 mb-4">
                El ejercicio de los derechos de acceso, rectificación, cancelación y oposición o la revocación del consentimiento, podrán efectuarse presentando solicitud por escrito en nuestro domicilio dirigida a la persona o departamento de privacidad, o bien, vía correo electrónico a <a href="mailto:msanchez@notaria36df.com.mx" className="text-primary-700 hover:text-primary-800 font-medium">msanchez@notaria36df.com.mx</a> o llamando al número <a href="tel:+525555570107" className="text-primary-700 hover:text-primary-800 font-medium">(55) 5557-0107</a> a partir del 6 de Enero de 2012.
              </p>
              <div className="p-4 bg-gold-50 rounded-lg border-l-4 border-gold-500">
                <p className="text-sm text-neutral-700">
                  <strong>Importante:</strong> Una vez plasmados en un instrumento notarial, no podrá Ud. ejercer sobre ellos ninguno de los referidos derechos, pudiendo hacerlo solamente respecto de los que se conservan en la base de datos de la Notaría.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Changes notification */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6">
              ¿Cómo conocer los cambios al presente aviso de privacidad?
            </h2>
            
            <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
              <p className="text-neutral-700 mb-4">
                El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones por lo cual nos comprometemos a mantenerlo informado de tal situación a través de alguno de los siguientes medios:
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-gold-500"></span>
                  <span className="text-neutral-700">Nuestra página de Internet <span className="font-medium">www.notaria36df.com.mx</span></span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-gold-500"></span>
                  <span className="text-neutral-700">Notificación a su correo electrónico</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-gold-500"></span>
                  <span className="text-neutral-700">En la primera comunicación que tengamos con usted después del cambio</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Contact information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6">
              ¿Cómo contactarnos?
            </h2>
            
            <div className="bg-primary-50 rounded-lg p-6">
              <p className="text-neutral-700 mb-4">
                Si usted tiene alguna duda sobre el presente aviso de privacidad, puede dirigirla a:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start">
                  <Mail className="mr-3 h-5 w-5 text-primary-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-primary-900">Correo Electrónico</p>
                    <a href="mailto:msanchez@notaria36df.com.mx" className="text-primary-700 hover:text-primary-800">msanchez@notaria36df.com.mx</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-primary-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-primary-900">Dirección</p>
                    <p className="text-sm text-neutral-700">Blvd. Miguel de Cervantes Saavedra No. 466, Colonia Irrigación, C.P. 11500, Ciudad de México</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-3 h-5 w-5 text-primary-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-primary-900">Teléfono</p>
                    <a href="tel:+525555570107" className="text-primary-700 hover:text-primary-800">(55) 5557-0107</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-white rounded-lg">
                <p className="text-sm text-neutral-700">
                  Asimismo, ponemos a su entera disposición copias del presente aviso de privacidad en nuestro domicilio y en nuestra página de Internet <span className="font-medium">www.notaria36df.com.mx</span>
                </p>
              </div>
            </div>
          </motion.section>

          {/* Footer information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12"
          >
            <div className="bg-primary-900 text-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Calendar className="mr-3 h-5 w-5 text-gold-500" />
                <h3 className="font-heading text-lg font-semibold">Actualizaciones del aviso de privacidad</h3>
              </div>
              
              <div className="space-y-2">
                <p className="text-neutral-300"><strong>Última revisión:</strong> julio de 2011</p>
                <p className="text-neutral-300"><strong>Notaría Número 36,</strong> a cargo de Lic. Jorge Fernando Caraza Pinto</p>
                <p className="text-neutral-300">
                  <strong>Domicilio:</strong> Blvd. Miguel de Cervantes Saavedra No. 466, Colonia Irrigación, C.P. 11500, Ciudad de México
                </p>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;