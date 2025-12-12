import InputField from '../FormFields/InputField';

const ContactSection = ({ register, errors }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <InputField
        name="phoneNumber"
        label="Teléfono de contacto"
        type="tel"
        placeholder="Escribe tu teléfono celular..."
        register={register}
        error={errors.phoneNumber}
        required
      />
      <InputField
        name="birthdate"
        label="Fecha de nacimiento"
        type="date"
        register={register}
        error={errors.birthdate}
        required
      />
    </div>
  );
};

export default ContactSection;
