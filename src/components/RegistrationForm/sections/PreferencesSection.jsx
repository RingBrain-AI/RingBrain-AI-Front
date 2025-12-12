import SelectField from '../FormFields/SelectField';

const PreferencesSection = ({ register, errors, genders, studySchedules }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <SelectField
        name="gender"
        label="Selecciona tu género"
        options={genders}
        register={register}
        error={errors.gender}
        required
      />
      <SelectField
        name="classSchedule"
        label="¿Qué horario eliges para estudiar?"
        options={studySchedules}
        register={register}
        error={errors.classSchedule}
        required
      />
    </div>
  );
};

export default PreferencesSection;
