import * as yup from 'yup';

export const registrationSchema = yup.object({
  // Campos requeridos por el backend
  email: yup.string().email('Email inválido').required('El correo es requerido'),
  fullName: yup.string().required('El nombre completo es requerido').min(3, 'Mínimo 3 caracteres'),
  dataType: yup.string().required('El tipo de dato es requerido'),
  documentNumber: yup.string().required('El número de documento es requerido'),
  phoneNumber: yup.string().required('El teléfono es requerido'),
  birthdate: yup.date().required('La fecha de nacimiento es requerida').nullable(),
  gender: yup.string().required('El género es requerido'),
  classSchedule: yup.string().required('El horario de estudio es requerido'),
  currentOccupation: yup.string().required('La ocupación actual es requerida'),
  residenceCity: yup.string().required('La ciudad es requerida'),
  socioeconomicStratum: yup.string().required('El estrato socioeconómico es requerido'),
  programmingLevel: yup.string().required('El nivel de programación es requerido'),
}).required();
