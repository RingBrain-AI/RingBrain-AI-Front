import SelectField from '../FormFields/SelectField';

const LocationSection = ({ register, errors, cities, socioeconomicStrata, programmingLevels }) => {
  return (
    <>
      {/* Ciudad */}
      <div className="grid md:grid-cols-2 gap-4">
        <SelectField
          name="residenceCity"
          label="Ciudad de residencia"
          options={cities}
          register={register}
          error={errors.residenceCity}
          required
        />
      </div>

      {/* Estrato y Nivel de Programación */}
      <div className="grid md:grid-cols-2 gap-4">
        <SelectField
          name="socioeconomicStratum"
          label="¿Cuál es tu estrato socioeconómico?"
          options={socioeconomicStrata}
          register={register}
          error={errors.socioeconomicStratum}
          required
        />
        <SelectField
          name="programmingLevel"
          label="Nivel conocimientos de programación"
          options={programmingLevels}
          register={register}
          error={errors.programmingLevel}
          required
        />
      </div>
    </>
  );
};

export default LocationSection;
