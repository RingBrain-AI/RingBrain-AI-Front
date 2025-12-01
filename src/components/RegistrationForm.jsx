import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { submitRegistration } from '../services/api';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';
import {
  DOCUMENT_TYPES,
  GENDERS,
  STUDY_SCHEDULES,
  OCCUPATIONS,
  EDUCATION_LEVELS,
  DEPARTMENTS,
  MUNICIPALITIES,
  SOCIOECONOMIC_STRATA,
  PROGRAMMING_LEVELS,
  AGREEMENT_TYPES,
} from '../utils/constants';

const schema = yup.object({
  email: yup.string().email('Email inválido').required('El correo es requerido'),
  fullName: yup.string().required('El nombre completo es requerido').min(3, 'Mínimo 3 caracteres'),
  documentType: yup.string().required('El tipo de documento es requerido'),
  documentNumber: yup.string().required('El número de documento es requerido'),
  phoneNumber: yup.string().required('El teléfono es requerido'),
  birthdate: yup.date().required('La fecha de nacimiento es requerida').nullable(),
  gender: yup.string().required('El género es requerido'),
  classSchedule: yup.string().required('El horario de estudio es requerido'),
  currentOccupation: yup.string().required('La ocupación actual es requerida'),
  currentOccupationText: yup.string().when('currentOccupation', {
    is: (val) => val && val !== 'trabajo' && val !== 'estudio' && val !== 'ambos' && val !== 'ninguno',
    then: (schema) => schema.required('Por favor especifica tu ocupación'),
    otherwise: (schema) => schema.notRequired(),
  }),
  educationLevel: yup.string().required('El nivel de escolaridad es requerido'),
  educationLevelText: yup.string().when('educationLevel', {
    is: (val) => ['tecnico', 'tecnologo', 'profesional'].includes(val),
    then: (schema) => schema.required('Por favor cuéntanos tu historia'),
    otherwise: (schema) => schema.notRequired(),
  }),
  residenceDepartment: yup.string().required('El departamento es requerido'),
  residenceCity: yup.string().required('El municipio es requerido'),
  socioeconomicStratum: yup.string().required('El estrato socioeconómico es requerido'),
  programmingLevel: yup.string().required('El nivel de programación es requerido'),
  agreementType: yup.string().required('El tipo de convenio es requerido'),
  privacyPolicy: yup.boolean().oneOf([true], 'Debes aceptar la política de privacidad'),
}).required();

const RegistrationForm = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const currentOccupation = watch('currentOccupation');
  const educationLevel = watch('educationLevel');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await submitRegistration(data);
      setSubmitStatus({
        type: 'success',
        message: '¡Registro exitoso! Pronto nos pondremos en contacto contigo.',
      });
      reset();
      setSelectedDepartment('');
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Error al enviar el formulario. Por favor intenta nuevamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const showCurrentOccupationText = currentOccupation && !['trabajo', 'estudio', 'ambos', 'ninguno'].includes(currentOccupation);
  const showEducationLevelText = ['tecnico', 'tecnologo', 'profesional'].includes(educationLevel);

  return (
    <section id="registro" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            ¡En Riwi lo hacemos posible!
          </h2>
          <p className="text-sm text-indigo-100">
            Ofrecemos <strong>becas 100% condonables en desarrollo de software</strong> para que aprendas desde cero y te prepares para el mundo tech sin preocuparte por el costo.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Correo y Nombre Completo */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  placeholder="juanduque@gmail.com"
                />
                {errors.email && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Nombre completo (Nombre y Apellido) <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  {...register('fullName')}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  placeholder="Ejemplo: Juan Felipe Duque Restrepo"
                />
                {errors.fullName && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.fullName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Tipo y Número de Documento */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">
                  Tipo de documento <span className="text-red-500">*</span>
                </label>
                <select
                  id="documentType"
                  {...register('documentType')}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                >
                  <option value="">Cédula de Ciudadanía</option>
                  {DOCUMENT_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.documentType && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.documentType.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label htmlFor="documentNumber" className="block text-sm font-medium text-gray-700">
                  Número de documento <span className="text-red-500">*</span>
                </label>
                <input
                  id="documentNumber"
                  type="text"
                  {...register('documentNumber')}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  placeholder="Ejemplo: 1130451234"
                />
                {errors.documentNumber && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.documentNumber.message}
                  </p>
                )}
              </div>
            </div>

            <p className="text-xs text-gray-600">
              En caso de ser extranjero, por favor anexar copia del permiso de trabajo en Colombia{' '}
              <button type="button" className="text-indigo-600 underline">
                Seleccionar archivo
              </button>{' '}
              <span className="text-gray-500">Ningún archivo seleccionado</span>
            </p>

            {/* Teléfono y Fecha de Nacimiento */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Teléfono de contacto <span className="text-red-500">*</span>
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  {...register('phoneNumber')}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  placeholder="Escribe tu teléfono celular, en el cual uses..."
                />
                {errors.phoneNumber && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
                  Fecha de nacimiento <span className="text-red-500">*</span>
                </label>
                <input
                  id="birthdate"
                  type="date"
                  {...register('birthdate')}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                />
                {errors.birthdate && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.birthdate.message}
                  </p>
                )}
              </div>
            </div>

            {/* Género y Horario */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Selecciona tu género <span className="text-red-500">*</span>
                </label>
                <select
                  id="gender"
                  {...register('gender')}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                >
                  <option value="">Masculino</option>
                  {GENDERS.map((gender) => (
                    <option key={gender.value} value={gender.value}>
                      {gender.label}
                    </option>
                  ))}
                </select>
                {errors.gender && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.gender.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label htmlFor="classSchedule" className="block text-sm font-medium text-gray-700">
                  ¿Qué horario eliges para estudiar? <span className="text-red-500">*</span>
                </label>
                <select
                  id="classSchedule"
                  {...register('classSchedule')}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                >
                  <option value="">6:00 am a 2:00 pm</option>
                  {STUDY_SCHEDULES.map((schedule) => (
                    <option key={schedule.value} value={schedule.value}>
                      {schedule.label}
                    </option>
                  ))}
                </select>
                {errors.classSchedule && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.classSchedule.message}
                  </p>
                )}
              </div>
            </div>

            {/* Ocupación Actual */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="currentOccupation" className="block text-sm font-medium text-gray-700">
                  ¿Qué ocupación tienes actualmente? <span className="text-red-500">*</span>
                </label>
                <select
                  id="currentOccupation"
                  {...register('currentOccupation')}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                >
                  <option value="">Trabajo</option>
                  {OCCUPATIONS.map((occupation) => (
                    <option key={occupation.value} value={occupation.value}>
                      {occupation.label}
                    </option>
                  ))}
                </select>
                {errors.currentOccupation && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.currentOccupation.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label htmlFor="currentOccupationText" className="block text-sm font-medium text-gray-700">
                  ¿Cuál es tu ocupación actual? <span className="text-red-500">*</span>
                </label>
                <input
                  id="currentOccupationText"
                  type="text"
                  {...register('currentOccupationText')}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  placeholder=""
                  disabled={!showCurrentOccupationText}
                />
                {errors.currentOccupationText && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.currentOccupationText.message}
                  </p>
                )}
              </div>
            </div>

            {/* Nivel de Escolaridad */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700">
                  ¿Cuál es tu Nivel de escolaridad? <span className="text-red-500">*</span>
                </label>
                <select
                  id="educationLevel"
                  {...register('educationLevel')}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                >
                  <option value="">Bachiller</option>
                  {EDUCATION_LEVELS.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
                {errors.educationLevel && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.educationLevel.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label htmlFor="educationLevelText" className="block text-sm font-medium text-gray-700">
                  Si eres técnico, tecnólogo o profesional. Cuéntanos tu título obtenido
                </label>
                <input
                  id="educationLevelText"
                  type="text"
                  {...register('educationLevelText')}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  placeholder="Tu respuesta"
                  disabled={!showEducationLevelText}
                />
                {errors.educationLevelText && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.educationLevelText.message}
                  </p>
                )}
              </div>
            </div>

            {/* Departamento y Municipio */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="residenceDepartment" className="block text-sm font-medium text-gray-700">
                  Departamento de residencia <span className="text-red-500">*</span>
                </label>
                <select
                  id="residenceDepartment"
                  {...register('residenceDepartment')}
                  onChange={handleDepartmentChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                >
                  <option value="">--Selecciona un Departamento--</option>
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept.value} value={dept.value}>
                      {dept.label}
                    </option>
                  ))}
                </select>
                {errors.residenceDepartment && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.residenceDepartment.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label htmlFor="residenceCity" className="block text-sm font-medium text-gray-700">
                  Municipio de residencia <span className="text-red-500">*</span>
                </label>
                <select
                  id="residenceCity"
                  {...register('residenceCity')}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  disabled={!selectedDepartment}
                >
                  <option value="">--Selecciona una Ciudad--</option>
                  {selectedDepartment &&
                    MUNICIPALITIES[selectedDepartment]?.map((city) => (
                      <option key={city.value} value={city.value}>
                        {city.label}
                      </option>
                    ))}
                </select>
                {errors.residenceCity && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.residenceCity.message}
                  </p>
                )}
              </div>
            </div>

            {/* Estrato y Nivel de Programación */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="socioeconomicStratum" className="block text-sm font-medium text-gray-700">
                  ¿Cuál es tu estrato socioeconómico? <span className="text-red-500">*</span>
                </label>
                <select
                  id="socioeconomicStratum"
                  {...register('socioeconomicStratum')}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                >
                  <option value="">1</option>
                  {SOCIOECONOMIC_STRATA.map((strata) => (
                    <option key={strata.value} value={strata.value}>
                      {strata.label}
                    </option>
                  ))}
                </select>
                {errors.socioeconomicStratum && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.socioeconomicStratum.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label htmlFor="programmingLevel" className="block text-sm font-medium text-gray-700">
                  Nivel conocimientos de programación <span className="text-red-500">*</span>
                </label>
                <select
                  id="programmingLevel"
                  {...register('programmingLevel')}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                >
                  <option value="">Avanzado</option>
                  {PROGRAMMING_LEVELS.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
                {errors.programmingLevel && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.programmingLevel.message}
                  </p>
                )}
              </div>
            </div>

            {/* Tipo de Convenio */}
            <div className="space-y-1">
              <label htmlFor="agreementType" className="block text-sm font-medium text-gray-700">
                Tipo de Convenio <span className="text-red-500">*</span>
              </label>
              <select
                id="agreementType"
                {...register('agreementType')}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              >
                <option value="">--Selecciona un Convenio--</option>
                {AGREEMENT_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {errors.agreementType && (
                <p className="text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.agreementType.message}
                </p>
              )}
            </div>

            {/* Política de Privacidad */}
            <div className="space-y-2">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  {...register('privacyPolicy')}
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-xs text-gray-700">
                  <span className="text-red-500">*</span> Al marcar esta casilla, confirmo que he leído y acepto la{' '}
                  <a href="#" className="text-indigo-600 underline">
                    Política de Tratamiento de Datos Personales
                  </a>{' '}
                  de Riwi S.A.S. Entiendo y estoy de acuerdo con los términos y condiciones establecidos en dicha
                  política, incluyendo el almacenamiento y procesamiento de mis datos personales de acuerdo con esta
                  política.
                </span>
              </label>
              {errors.privacyPolicy && (
                <p className="text-xs text-red-600 flex items-center gap-1 ml-6">
                  <AlertCircle className="w-3 h-3" />
                  {errors.privacyPolicy.message}
                </p>
              )}
            </div>

            {/* Status Messages */}
            {submitStatus && (
              <div
                className={`p-3 rounded-lg flex items-center gap-2 text-sm ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 border border-green-200 text-green-700'
                    : 'bg-red-50 border border-red-200 text-red-700'
                }`}
              >
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                )}
                <p>{submitStatus.message}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-900 hover:bg-indigo-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg text-sm"
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                'Aplicar ahora'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
