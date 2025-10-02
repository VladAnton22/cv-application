import InputDiv from "../InputDiv";

export default function EducationForm({
  onChange,
  degree,
  schoolName,
  location,
  startDate,
  endDate,
  id,
}) {
  return (
    <form
      className="max-w-sm p-3 mx-auto flex flex-col gap-4 font-sans"
      id={id}
      onSubmit={(e) => e.preventDefault()}
    >
      <InputDiv
        type="text"
        id="school-name"
        labelText="School"
        value={schoolName}
        onChange={onChange}
        data-key="schoolName"
      />
      <InputDiv
        type="text"
        id="degree"
        labelText="Degree"
        value={degree}
        onChange={onChange}
        data-key="degree"
      />
      <div className="grid grid-cols-2 gap-2">
        <InputDiv
          type="text"
          id="start-date"
          labelText="Start Date"
          value={startDate}
          onChange={onChange}
          data-key="startDate"
        />
        <InputDiv
          type="text"
          id="end-date"
          labelText="End Date"
          value={endDate}
          onChange={onChange}
          data-key="endDate"
        />
      </div>
      <InputDiv
        type="text"
        id="location"
        labelText="Location"
        value={location}
        onChange={onChange}
        data-key="location"
      />
    </form>
  );
}
