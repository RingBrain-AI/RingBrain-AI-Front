import SelectField from '../FormFields/SelectField';

const OccupationSection = ({ register, errors, occupations }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <SelectField
        name="currentOccupation"
        label="¿Qué ocupación tienes actualmente?"
        options={occupations}
        register={register}
        error={errors.currentOccupation}
        required
      />
    </div>
  );
};

export default OccupationSection;
