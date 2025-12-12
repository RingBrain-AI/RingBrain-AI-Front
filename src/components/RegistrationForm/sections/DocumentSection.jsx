import InputField from '../FormFields/InputField';
import SelectField from '../FormFields/SelectField';

const DocumentSection = ({ register, errors, dataTypes }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <SelectField
        name="dataType"
        label="Tipo de dato"
        options={dataTypes}
        register={register}
        error={errors.dataType}
        required
      />
      <InputField
        name="documentNumber"
        label="Número de documento"
        type="text"
        placeholder="Ejemplo: 1130451234"
        register={register}
        error={errors.documentNumber}
        required
      />
    </div>
  );
};

export default DocumentSection;
