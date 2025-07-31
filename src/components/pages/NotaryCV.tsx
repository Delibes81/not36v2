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
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-primary-100 p-6">
                <Scale className="h-16 w-16 text-primary-700" />
              </div>
            </div>
            <h1 className="font-heading text-4xl font-bold text-primary-900 mb-4">
              Jorge Fernando Caraza Pinto
            </h1>
            <p className="text-xl text-gold-700 font-medium">
              Titular de la Notaría 36
            </p>
            <p className="text-lg text-neutral-600 mt-2">
              Ciudad de México
            </p>
          </div>

          {/* Personal Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="bg-primary-50 rounded-lg p-8">
              <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6 flex items-center">
                <Users className="mr-3 h-6 w-6 text-primary-700" />
                Datos Generales
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-neutral-700"><span className="font-medium">Fecha de nacimiento:</span> 25 de octubre de 1965</p>
                  <p className="text-neutral-700 mt-2"><span className="font-medium">Estado civil:</span> Casado</p>
                  <p className="text-neutral-700 mt-2"><span className="font-medium">Lugar de nacimiento:</span> México, D.F.</p>
                </div>
                <div>
                  <p className="text-neutral-700 mt-2"><span className="font-medium">Domicilio:</span> Blvd. Miguel de Cervantes Saavedra No. 466, Colonia Irrigacion, 11500</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gold-50 rounded-lg border-l-4 border-gold-500">
                <p className="text-neutral-700">
                  <span className="font-medium">Grado académico:</span> Doctorado en Derecho de la Empresa, con Diploma de Estudios Avanzados, por la Universidad Complutense de Madrid, España.
                </p>
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
            <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-primary-700" />
              Estudios Académicos
            </h2>
            
            <div className="space-y-6">
              {/* Basic Education */}
              <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-primary-800 mb-4">Educación Básica</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-neutral-900">Instituto Estado de México</p>
                      <p className="text-sm text-neutral-600">Primaria</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-neutral-600">1972 - 1977</p>
                      <p className="text-sm font-medium text-gold-700">Promedio: 8.8</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-neutral-900">Escuela Secundaria Diurna No. 28 "Dr. Manuel Barranco"</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-neutral-600">1977 - 1980</p>
                      <p className="text-sm font-medium text-gold-700">Promedio: 9.8</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-neutral-900">Escuela Preparatoria "Universidad La Salle"</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-neutral-600">1980 - 1982</p>
                      <p className="text-sm font-medium text-gold-700">Promedio: 9.1</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Education */}
              <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-primary-800 mb-4">Educación Profesional</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-primary-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-primary-900">Escuela Libre de Derecho</h4>
                      <span className="text-sm text-neutral-600">1983 - 1988</span>
                    </div>
                    <p className="text-sm text-neutral-700 mb-2">Promedio: <span className="font-medium text-gold-700">9.8</span></p>
                    <p className="text-sm text-neutral-700 mb-1"><span className="font-medium">Tesis:</span> "Naturaleza Jurídica de la Sociedad Conyugal"</p>
                    <p className="text-sm text-neutral-700 mb-1">Examen Profesional sustentado el 30 de Marzo de 1989</p>
                    <p className="text-sm text-gold-700 font-medium">Mención especial por la solución al caso práctico planteado y al examen profesional</p>
                  </div>
                  
                  <div className="p-4 bg-gold-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-primary-900">Universidad Anáhuac - Doctorado en Derecho</h4>
                      <span className="text-sm text-neutral-600">1996 - 1997</span>
                    </div>
                    <p className="text-sm text-neutral-700 mb-2">Promedio: <span className="font-medium text-gold-700">9.0</span></p>
                    <p className="text-sm text-neutral-700">Doctorado en "Derecho de la empresa"</p>
                    <p className="text-sm text-gold-700 font-medium mt-1">Diplomado de Estudios Avanzados: "Empresas transnacionales y fusión de Sociedades"</p>
                  </div>
                </div>
              </div>

              {/* Other Studies */}
              <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
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

          {/* Professional Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6 flex items-center">
              <Briefcase className="mr-3 h-6 w-6 text-primary-700" />
              Experiencia Laboral
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-primary-900">Bufete Yllanes Ramos</h3>
                  <span className="text-sm text-neutral-600">Sep 1984 - Ene 1985</span>
                </div>
                <p className="text-sm text-neutral-700">Pasante en materia laboral</p>
              </div>
              
              <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-primary-900">Notarías 116 y 188 del D.F.</h3>
                  <span className="text-sm text-neutral-600">Ago 1985 - Dic 1985</span>
                </div>
                <p className="text-sm text-neutral-700">Pasante de notaría</p>
              </div>
              
              <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-primary-900">Notarías 36 y 76 del D.F.</h3>
                  <span className="text-sm text-neutral-600">Jul 1986 - Dic 1987</span>
                </div>
                <p className="text-sm text-neutral-700">Pasante de notaría</p>
              </div>
              
              <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
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
            <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6 flex items-center">
              <Award className="mr-3 h-6 w-6 text-primary-700" />
              Situación Profesional
            </h2>
            
            <div className="bg-gradient-to-r from-primary-50 to-gold-50 rounded-lg p-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-neutral-900">Aspirante al ejercicio del notariado</span>
                  <span className="text-sm text-neutral-600">8 de julio de 1992</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <div>
                    <span className="font-medium text-neutral-900">Notario público del Distrito Federal</span>
                    <p className="text-sm text-gold-700 font-medium">Calificación: 75 puntos</p>
                  </div>
                  <span className="text-sm text-neutral-600">25 de agosto de 1992</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-primary-900">Protesta - Titular de la Notaría 36 del Distrito Federal</span>
                  <span className="text-sm text-primary-700 font-medium">2 de febrero de 1993</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-primary-900">Inicio de funciones</span>
                  <span className="text-sm text-primary-700 font-medium">15 de febrero de 1993</span>
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
            <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6 flex items-center">
              <BookOpen className="mr-3 h-6 w-6 text-primary-700" />
              Experiencia Docente
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-medium text-primary-900 mb-2">Escuela Libre de Derecho</h3>

                <p className="text-sm text-neutral-700">Profesor adjunto de la Cátedra de Derecho Notarial (1989 - 1992)</p>
              </div>
              
              <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-medium text-primary-900 mb-2">Universidad Intercontinental</h3>
                <p className="text-sm text-neutral-700">Profesor titular de la Cátedra de Derecho Civil I (Segundo semestre de 1989)</p>                
                <p className="text-sm text-neutral-700 mb-1">Profesor adjunto de la Cátedra de Derecho Administrativo I (Segundo semestre 1988)</p>

              </div>
              
              <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-medium text-primary-900 mb-2">Instituto Politécnico Nacional</h3>
                <p className="text-sm text-neutral-700">Profesor titular de la Cátedra de Lengua adicional al español, por oposición (Primer semestre de 1990)</p>
              </div>
              
              <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
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
            <h2 className="font-heading text-2xl font-semibold text-primary-900 mb-6 flex items-center">
              <Award className="mr-3 h-6 w-6 text-primary-700" />
              Estudios de Especialización y Cursos
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-primary-800 mb-4">Cursos de Especialización Notarial</h3>
                <div className="space-y-2">
                  <p className="text-sm text-neutral-700">• Curso de actualización en las disciplinas básicas de la función notarial (Abril - Septiembre 1985)</p>
                  <p className="text-sm text-neutral-700">• Curso de especialización en las disciplinas básicas de la función notarial (Marzo - Noviembre 1987)</p>
                </div>
              </div>
              
              <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-primary-800 mb-4">Actualización Continua (1993 a la fecha)</h3>
                <div className="space-y-2">
                  <p className="text-sm text-neutral-700">• Cursos y seminarios de actualización fiscal organizados por:</p>
                  <div className="ml-4 space-y-1">
                    <p className="text-xs text-neutral-600">- Colegio de Notarios del Distrito Federal, A.C.</p>
                    <p className="text-xs text-neutral-600">- Asociación Nacional del Notariado Mexicano, A.C.</p>
                    <p className="text-xs text-neutral-600">- Academia Fiscal, A.C.</p>
                    <p className="text-xs text-neutral-600">- Instituto Mexicano de Ejecutivos de Finanzas (IMEF)</p>
                  </div>
                  <p className="text-sm text-neutral-700 mt-3">• Cursos y seminarios de actualización legislativa</p>
                </div>
              </div>
              
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                <h3 className="font-semibold text-primary-800 mb-4">Actividad como Conferencista</h3>
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