import InputField from '../FormFields/InputField';

const ContactSection = ({ register, errors }) => {

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^\d+]/g, ''); 
    if (!value.startsWith('+57')) {
      value = '+57' + value.replace(/^\+/, '');
    }
    e.target.value = value; 
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <InputField
        name="phoneNumber"
        label="Teléfono de contacto"
        type="tel"
        placeholder="Escribe tu teléfono celular..."
        {...register('phoneNumber', { 
    onChange: handlePhoneChange 
  })}
        error={errors.phoneNumber}
        required
      />
      
      <InputField
        name="birthdate"
        label="Fecha de nacimiento"
        type="date"
        {...register('birthdate')}
        error={errors.birthdate}
        required
      />
    </div>
  );
};

export default ContactSection;

