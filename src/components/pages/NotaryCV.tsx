import React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { Scale, GraduationCap, Briefcase, Award, BookOpen, Users } from 'lucide-react';

const NotaryCV: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="relative text-center mb-16 pt-16 pb-20 rounded-3xl overflow-hidden shadow-xl border border-primary-900/20">
            <div 
              className="absolute inset-0 z-0 bg-cover bg-[center_15%]"
              style={{ backgroundImage: 'url(/fotos-Notario/exec-f27f5c39-3ef9-4a48-9746-248016fb4e09.webp)' }}
            ></div>
            <div className="absolute inset-0 bg-primary-900/85 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent-400 via-accent-500 to-accent-600 z-10"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="rounded-full bg-primary-800/80 backdrop-blur-sm shadow-2xl p-6 relative group border border-primary-700">
                  <div className="absolute inset-0 rounded-full border-2 border-accent-400/50 scale-110 transition-transform duration-500 group-hover:scale-125"></div>
                  <Scale className="h-16 w-16 text-accent-400" />
                </div>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
                Jorge Fernando Caraza Pinto
              </h1>
              <p className="text-xl text-accent-400 font-semibold uppercase tracking-widest mb-3 drop-shadow">
                Titular de la Notaría 36
              </p>
              <p className="text-lg text-primary-100 font-medium opacity-90">
                Ciudad de México
              </p>
            </div>
          </div>

          {/* Personal Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary-100 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary-400 to-primary-600 opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6 flex items-center">
                <div className="p-2.5 bg-primary-50 text-primary-700 rounded-xl mr-4 shadow-sm border border-primary-100">
                  <Users className="h-6 w-6" />
                </div>
                Datos Generales
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-2">
                    <div className="space-y-3">
                      <p className="text-neutral-700 flex items-center"><span className="w-2 h-2 rounded-full bg-primary-400 mr-3"></span><span className="font-medium mr-2">Fecha de nacimiento:</span> 25 de octubre de 1965</p>
                      <p className="text-neutral-700 flex items-center"><span className="w-2 h-2 rounded-full bg-primary-400 mr-3"></span><span className="font-medium mr-2">Estado civil:</span> Casado</p>
                      <p className="text-neutral-700 flex items-center"><span className="w-2 h-2 rounded-full bg-primary-400 mr-3"></span><span className="font-medium mr-2">Lugar de nacimiento:</span> México, D.F.</p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-neutral-700 flex items-start"><span className="w-2 h-2 rounded-full bg-primary-400 mr-3 mt-2"></span><span className="font-medium mr-2">Domicilio:</span> <span className="flex-1">Blvd. Miguel de Cervantes Saavedra No. 466, Colonia Irrigacion, 11500</span></p>
                    </div>
                  </div>
                  <div className="mt-8 p-5 bg-gradient-to-r from-accent-50 to-white rounded-xl border border-accent-100 shadow-sm ml-2">
                    <p className="text-neutral-800">
                      <span className="font-semibold text-accent-800">Grado académico:</span> Doctorado en Derecho de la Empresa, con Diploma de Estudios Avanzados, por la Universidad Complutense de Madrid, España.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block relative rounded-xl overflow-hidden shadow-inner h-full min-h-[200px]">
                  <img 
                    src="/fotos-Notario/exec-029b1fcf-5e7e-40e6-9cef-def79f8f3676.webp" 
                    alt="Jorge Fernando Caraza Pinto" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary-900/10"></div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Academic Studies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-8 flex items-center">
              <div className="p-2.5 bg-primary-50 text-primary-700 rounded-xl mr-4 shadow-sm border border-primary-100">
                <GraduationCap className="h-6 w-6" />
              </div>
              Estudios Académicos
            </h2>
            
            <div className="space-y-6">
              {/* Basic Education */}
              <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-semibold text-primary-800 mb-4">Educación Básica</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-neutral-900">Instituto Estado de México</p>
                      <p className="text-sm text-neutral-600">Primaria</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-neutral-600">1972 - 1977</p>
                      <p className="text-sm font-medium text-accent-700">Promedio: 9.0</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-neutral-900">Escuela Secundaria Diurna No. 28 "Dr. Manuel Barranco"</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-neutral-600">1977 - 1980</p>
                      <p className="text-sm font-medium text-accent-700">Promedio: 9.8</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-neutral-900">Escuela Preparatoria "Universidad La Salle"</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-neutral-600">1980 - 1983</p>
                      <p className="text-sm font-medium text-accent-700">Promedio: 9.7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Education */}
              <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-semibold text-primary-800 mb-4">Educación Profesional</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-primary-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-primary-900">Escuela Libre de Derecho</h4>
                      <span className="text-sm text-neutral-600">1983 - 1988</span>
                    </div>
                    <p className="text-sm text-neutral-700 mb-2">Promedio: <span className="font-medium text-accent-700">9.8</span></p>
                    <p className="text-sm text-neutral-700 mb-1"><span className="font-medium">Tesis:</span> "Naturaleza Jurídica de la Sociedad Conyugal"</p>
                    <p className="text-sm text-neutral-700 mb-1">Examen Profesional sustentado el 30 de Marzo de 1989</p>
                    <p className="text-sm text-accent-700 font-medium">Mención especial por la solución al caso práctico planteado y al examen profesional</p>
                  </div>
                  
                  <div className="p-4 bg-accent-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-primary-900">Universidad Anáhuac - Doctorado en Derecho</h4>
                      <span className="text-sm text-neutral-600">1996 - 1997</span>
                    </div>
                    <p className="text-sm text-neutral-700 mb-2">Promedio: <span className="font-medium text-accent-700">9.0</span></p>
                    <p className="text-sm text-neutral-700">Doctorado en "Derecho de la empresa"</p>
                    <p className="text-sm text-accent-700 font-medium mt-1">Diplomado de Estudios Avanzados: "Empresas transnacionales y fusión de Sociedades"</p>
                  </div>
                </div>
              </div>

              {/* Other Studies */}
              <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-semibold text-primary-800 mb-4">Otros Estudios</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <p className="text-sm text-neutral-700">• "First Certificate in English", Universidad de Cambridge, UK</p>
                  <p className="text-sm text-neutral-700">• "Oxford Delegacy Exam", Universidad de oxford, UK</p>
                  <p className="text-sm text-neutral-700">• "Advanced Certificate Exam", Instituto Anglo Mexicano de Cultura</p>
                  <p className="text-sm text-neutral-700">• "Historia del Arte", Centro de Cultura Casa Lamm.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Visual Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-12 rounded-2xl overflow-hidden relative h-48 md:h-64 shadow-md group"
          >
            <img 
              src="/fotos-Notario/exec-4bbd95d3-93d7-4ebd-8d84-be78e00b58d0.webp" 
              alt="Notario con clientes" 
              className="absolute inset-0 w-full h-full object-cover object-[center_20%] transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-transparent flex items-center p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white max-w-md leading-tight drop-shadow-md">
                Compromiso, experiencia y certeza jurídica.
              </h3>
            </div>
          </motion.div>

          {/* Professional Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-8 flex items-center">
              <div className="p-2.5 bg-primary-50 text-primary-700 rounded-xl mr-4 shadow-sm border border-primary-100">
                <Briefcase className="h-6 w-6" />
              </div>
              Experiencia Laboral
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-primary-900">Bufete Yllanes Ramos</h3>
                  <span className="text-sm text-neutral-600">Sep 1984 - Ene 1985</span>
                </div>
                <p className="text-sm text-neutral-700">Pasante en materia laboral</p>
              </div>
              
              <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-primary-900">Notarías 116 y 188 del D.F.</h3>
                  <span className="text-sm text-neutral-600">Ago 1985 - Dic 1985</span>
                </div>
                <p className="text-sm text-neutral-700">Pasante de notaría</p>
              </div>
              
              <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-primary-900">Notarías 36 y 76 del D.F.</h3>
                  <span className="text-sm text-neutral-600">Jul 1986 - Dic 1987</span>
                </div>
                <p className="text-sm text-neutral-700">Pasante de notaría</p>
              </div>
              
              <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-primary-900">Notaría 115 del D.F.</h3>
                  <span className="text-sm text-neutral-600">Ene 1988 - Ago 1992</span>
                </div>
                <p className="text-sm text-neutral-700">Abogado de notaría</p>
              </div>
            </div>
          </motion.section>

          {/* Professional Status */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-8 flex items-center">
              <div className="p-2.5 bg-primary-50 text-primary-700 rounded-xl mr-4 shadow-sm border border-primary-100">
                <Award className="h-6 w-6" />
              </div>
              Situación Profesional
            </h2>
            
            <div className="relative rounded-2xl p-8 md:p-10 shadow-lg overflow-hidden">
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/fotos-Notario/exec-dd399516-08c3-443f-96e7-d13dc6ae098e.webp)' }}
              ></div>
              <div className="absolute inset-0 bg-primary-900/90 z-0"></div>
              
              <div className="relative z-10 space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center p-5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white transition-all hover:bg-white/20">
                  <span className="font-medium text-lg">Aspirante al ejercicio del notariado</span>
                  <span className="text-sm text-primary-100 mt-2 md:mt-0 bg-primary-800/60 px-3 py-1 rounded-full">8 de julio de 1992</span>
                </div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-center p-5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white transition-all hover:bg-white/20">
                  <div>
                    <span className="font-medium text-lg">Notario público del Distrito Federal</span>
                    <p className="text-sm text-accent-300 font-medium mt-1 flex items-center">
                      <Award className="w-4 h-4 mr-1" /> Calificación: 75 puntos
                    </p>
                  </div>
                  <span className="text-sm text-primary-100 mt-3 md:mt-0 bg-primary-800/60 px-3 py-1 rounded-full">25 de agosto de 1992</span>
                </div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-center p-5 bg-gradient-to-r from-accent-500/20 to-transparent backdrop-blur-md rounded-xl border border-accent-400/30 text-white transition-all hover:bg-accent-500/30">
                  <span className="font-semibold text-lg text-accent-100">Protesta - Titular de la Notaría 36 del Distrito Federal</span>
                  <span className="text-sm text-accent-200 font-medium mt-2 md:mt-0 bg-accent-900/60 px-3 py-1 rounded-full">2 de febrero de 1993</span>
                </div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-center p-5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white transition-all hover:bg-white/20">
                  <span className="font-medium text-lg">Inicio de funciones</span>
                  <span className="text-sm text-primary-100 mt-2 md:mt-0 bg-primary-800/60 px-3 py-1 rounded-full">15 de febrero de 1993</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Teaching Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-8 flex items-center">
              <div className="p-2.5 bg-primary-50 text-primary-700 rounded-xl mr-4 shadow-sm border border-primary-100">
                <BookOpen className="h-6 w-6" />
              </div>
              Experiencia Docente
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-medium text-primary-900 mb-2">Escuela Libre de Derecho</h3>

                <p className="text-sm text-neutral-700">Profesor adjunto de la Cátedra de Derecho Notarial (1989 - 1992)</p>
              </div>
              
              <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-medium text-primary-900 mb-2">Universidad Intercontinental</h3>
                <p className="text-sm text-neutral-700">Profesor titular de la Cátedra de Derecho Civil I (Segundo semestre de 1989)</p>                
                <p className="text-sm text-neutral-700 mb-1">Profesor adjunto de la Cátedra de Derecho Administrativo I (Segundo semestre 1988)</p>

              </div>
              
              <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-medium text-primary-900 mb-2">Instituto Politécnico Nacional</h3>
                <p className="text-sm text-neutral-700">Profesor titular de la Cátedra de Lengua adicional al español, por oposición (Primer semestre de 1990)</p>
              </div>
              
              <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-medium text-primary-900 mb-2">Universidad La Salle (1996)</h3>
                <p className="text-sm text-neutral-700 mb-1">Profesor titular de la Cátedra de Derecho Notarial</p>
                <p className="text-sm text-neutral-700">Profesor titular de la Cátedra de Derecho Mercantil I</p>
              </div>
            </div>
          </motion.section>

          {/* Specialization Studies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-8 flex items-center">
              <div className="p-2.5 bg-primary-50 text-primary-700 rounded-xl mr-4 shadow-sm border border-primary-100">
                <Award className="h-6 w-6" />
              </div>
              Estudios de Especialización y Cursos
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-semibold text-primary-800 mb-4">Cursos de Especialización Notarial</h3>
                <div className="space-y-2">
                  <p className="text-sm text-neutral-700">• Curso de actualización en las disciplinas básicas de la función notarial (Abril - Septiembre 1989)</p>
                  <p className="text-sm text-neutral-700">• Curso de especialización en las disciplinas básicas de la función notarial (Marzo - Noviembre 1990)</p>
                </div>
              </div>
              
              <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-semibold text-primary-800 mb-4">Actualización Continua (1993 a la fecha)</h3>
                <div className="space-y-2">
                  <p className="text-sm text-neutral-700">• Cursos y seminarios de actualización fiscal organizados por:</p>
                  <div className="ml-4 space-y-1">
                    <p className="text-xs text-neutral-600">- Colegio de Notarios del Distrito Federal, A.C.</p>
                    <p className="text-xs text-neutral-600">- Asociación Nacional del Notariado Mexicano, A.C.</p>
                    <p className="text-xs text-neutral-600">- Informatica SIAE SA de CV.</p>                  
                    <p className="text-xs text-neutral-600">- Instituto Mexicano de Ejecutivos de Finanzas (IMEF)</p>
                  </div>
                  <p className="text-sm text-neutral-700 mt-3">• Cursos y seminarios de actualización legislativa</p>
                  <div className="ml-4 space-y-1">
                    <p className="text-xs text-neutral-600">- Colegio de Notarios del Distrito Federal, A.C.</p>
                    <p className="text-xs text-neutral-600">- Asociación Nacional del Notariado Mexicano, A.C.</p>
                  </div>                  
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary-50 to-white border border-primary-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold text-primary-900 mb-4 flex items-center">
                  <span className="w-1.5 h-5 bg-accent-500 rounded-full mr-3"></span>
                  Actividad como Conferencista
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-neutral-700">• Expositor-Conferencista en diversos cursos y paneles del Colegio de Notarios del Distrito Federal, A.C. (1993 a la fecha)</p>
                  <p className="text-sm text-neutral-700">• Expositor-Conferencista en diversos cursos y paneles de la Asociación Nacional del Notariado Mexicano, A.C. (1993 a la fecha)</p>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </Container>
    </div>
  );
};

export default NotaryCV;
