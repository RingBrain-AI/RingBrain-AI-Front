/**
 * Form constants and options
 * Centralized location for all form dropdown options
 */

export const DOCUMENT_TYPES = [
  { value: 'cc', label: 'Cédula de Ciudadanía' },
  { value: 'ce', label: 'Cédula de Extranjería' },
  { value: 'ti', label: 'Tarjeta de Identidad' },
  { value: 'pasaporte', label: 'Pasaporte' },
];

export const GENDERS = [
  { value: 'masculino', label: 'Masculino' },
  { value: 'femenino', label: 'Femenino' },
  { value: 'otro', label: 'Otro' },
  { value: 'prefiero_no_decir', label: 'Prefiero no decir' },
];

export const STUDY_SCHEDULES = [
  { value: 'manana', label: '6:00 am a 2:00 pm' },
  { value: 'tarde', label: '2:00 pm a 10:00 pm' },
];

export const OCCUPATIONS = [
  { value: 'trabajo', label: 'Trabajo' },
  { value: 'estudio', label: 'Estudio' },
  { value: 'ambos', label: 'Trabajo y Estudio' },
  { value: 'ninguno', label: 'Ninguno' },
];

export const EDUCATION_LEVELS = [
  { value: 'bachiller', label: 'Bachiller' },
  { value: 'tecnico', label: 'Técnico' },
  { value: 'tecnologo', label: 'Tecnólogo' },
  { value: 'profesional', label: 'Profesional' },
  { value: 'posgrado', label: 'Posgrado' },
];

export const DEPARTMENTS = [
  { value: 'antioquia', label: 'Antioquia' },
  { value: 'atlantico', label: 'Atlántico' },
  { value: 'bogota', label: 'Bogotá D.C.' },
  { value: 'valle', label: 'Valle del Cauca' },
  { value: 'cundinamarca', label: 'Cundinamarca' },
  { value: 'santander', label: 'Santander' },
  { value: 'bolivar', label: 'Bolívar' },
];

export const MUNICIPALITIES = {
  antioquia: [
    { value: 'medellin', label: 'Medellín' },
    { value: 'envigado', label: 'Envigado' },
    { value: 'itagui', label: 'Itagüí' },
    { value: 'bello', label: 'Bello' },
  ],
  atlantico: [
    { value: 'barranquilla', label: 'Barranquilla' },
    { value: 'soledad', label: 'Soledad' },
  ],
  bogota: [
    { value: 'bogota', label: 'Bogotá' },
  ],
  valle: [
    { value: 'cali', label: 'Cali' },
    { value: 'palmira', label: 'Palmira' },
  ],
  cundinamarca: [
    { value: 'soacha', label: 'Soacha' },
    { value: 'chia', label: 'Chía' },
  ],
  santander: [
    { value: 'bucaramanga', label: 'Bucaramanga' },
  ],
  bolivar: [
    { value: 'cartagena', label: 'Cartagena' },
  ],
};

export const SOCIOECONOMIC_STRATA = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
];

export const PROGRAMMING_LEVELS = [
  { value: 'ninguno', label: 'Ninguno' },
  { value: 'basico', label: 'Básico' },
  { value: 'intermedio', label: 'Intermedio' },
  { value: 'avanzado', label: 'Avanzado' },
];

export const AGREEMENT_TYPES = [
  { value: 'general', label: 'General' },
  { value: 'empresarial', label: 'Empresarial' },
  { value: 'institucional', label: 'Institucional' },
];
