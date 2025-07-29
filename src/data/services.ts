import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Derecho mercantil y corporativo',
    description: 'Constitución de Sociedades, Fusión, Escisión, Transformación, Liquidación, Protocolización de Actas de Asamblea y Consejo.',
    icon: 'building',
    items: [
      'Constitución de Sociedades',
      'Fusión',
      'Escisión',
      'Transformación',
      'Liquidación',
      'Protocolización de Actas de Asamblea y Consejo'
    ]
  },
  {
    id: '2',
    title: 'Derecho civil',
    description: 'Testamentos, Poderes, Revocación de poderes, Sucesiones Testamentarias, Sucesiones Intestamentarias, Cesiones de Derechos.',
    icon: 'scroll-text',
    items: [
      'Testamentos',
      'Poderes',
      'Revocación de poderes',
      'Sucesiones Testamentarias',
      'Sucesiones Intestamentarias',
      'Cesiones de Derechos'
    ]
  },
  {
    id: '3',
    title: 'Derecho inmobiliario',
    description: 'Compraventa, Donación, Permuta, Condominios, Aportación a sociedades, Adjudicaciones por herencia, y más servicios inmobiliarios.',
    icon: 'home',
    items: [
      'Compraventa',
      'Donación',
      'Permuta',
      'Condominios',
      'Aportación a sociedades',
      'Adjudicaciones por herencia',
      'Adjudicaciones por Remate Judicial',
      'Fideicomisos',
      'Cancelación de Hipotecas',
      'Fusión y Subdivisión de predios',
      'Transmisión de Propiedad en Ejecución de Fideicomiso'
    ]
  },
  {
    id: '4',
    title: 'Otros',
    description: 'Cotejo de documentos, Notificaciones, Interpelaciones, Fe de hechos, Ratificaciones, Declaraciones, y servicios adicionales.',
    icon: 'file-signature',
    items: [
      'Cotejo de documentos y Expedición de copias certificadas',
      'Notificaciones',
      'Interpelaciones',
      'Fe de hechos',
      'Ratificaciones',
      'Declaraciones',
      'Adjudicaciones por Remate Judicial',
      'Apostillamientos',
      'Legalizaciones',
      'Servicios de Mediación, Negociación y Solución de Conflictos'
    ]
  }
];