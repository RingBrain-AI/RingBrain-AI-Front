import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { submitRegistration, fetchFormData } from '../../services/api';
import { registrationSchema } from './validationSchema';

// Sections
import PersonalInfoSection from './sections/PersonalInfoSection';
import DocumentSection from './sections/DocumentSection';
import ContactSection from './sections/ContactSection';
import PreferencesSection from './sections/PreferencesSection';
import OccupationSection from './sections/OccupationSection';
import LocationSection from './sections/LocationSection';
import BenefitsSection from './BenefitsSection';

const RegistrationForm = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);

  // Form data from backend
  const [formData, setFormData] = useState({
    genders: [],
    studySchedules: [],
    occupations: [],
    socioeconomicStrata: [],
    programmingLevels: [],
    cities: [],
    dataTypes: [],
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  // Fetch form data from backend on component mount
  useEffect(() => {
    const loadFormData = async () => {
      try {
        setIsLoadingData(true);
        const data = await fetchFormData();
        setFormData(data);
      } catch (error) {
        console.error('Error al cargar datos del formulario:', error);
        // Keep empty arrays on error - form will show loading state
      } finally {
        setIsLoadingData(false);
      }
    };

    loadFormData();
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await submitRegistration(data, formData);
      setSubmitStatus({
        type: 'success',
        message: '¡Registro exitoso! Pronto nos pondremos en contacto contigo.',
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Error al enviar el formulario. Por favor intenta nuevamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registro" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            ¿Por qué elegir RIWI?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Inscríbete ahora
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Benefits */}
          <div className="space-y-6">
            <BenefitsSection />
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Completa tu registro
              </h3>
              <p className="text-sm text-gray-600">
                Todos los campos marcados con <span className="text-red-500">*</span> son obligatorios
              </p>
            </div>

            {isLoadingData ? (
              <div className="flex items-center justify-center py-12">
                <Loader className="w-8 h-8 animate-spin text-indigo-600" />
                <span className="ml-3 text-gray-600">Cargando formulario...</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Info */}
                <PersonalInfoSection register={register} errors={errors} />

                {/* Document */}
                <DocumentSection 
                  register={register} 
                  errors={errors}
                  dataTypes={formData.dataTypes}
                />

                {/* Contact */}
                <ContactSection register={register} errors={errors} />

                {/* Preferences */}
                <PreferencesSection 
                  register={register} 
                  errors={errors}
                  genders={formData.genders}
                  studySchedules={formData.studySchedules}
                />

                {/* Occupation */}
                <OccupationSection 
                  register={register} 
                  errors={errors}
                  occupations={formData.occupations}
                />

                {/* Location */}
                <LocationSection 
                  register={register} 
                  errors={errors}
                  cities={formData.cities}
                  socioeconomicStrata={formData.socioeconomicStrata}
                  programmingLevels={formData.programmingLevels}
                />

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
                  className="w-full gradient-bg hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar solicitud'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
