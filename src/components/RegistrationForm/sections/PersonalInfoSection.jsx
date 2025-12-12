import InputField from '../FormFields/InputField';

const PersonalInfoSection = ({ register, errors }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <InputField
        name="email"
        label="Correo electrónico"
        type="email"
        placeholder="juanduque@gmail.com"
        register={register}
        error={errors.email}
        required
      />
      <InputField
        name="fullName"
        label="Nombre completo (Nombre y Apellido)"
        type="text"
        placeholder="Ejemplo: Juan Felipe Duque Restrepo"
        register={register}
        error={errors.fullName}
        required
      />
    </div>
  );
};

export default PersonalInfoSection;
