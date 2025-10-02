import InputDiv from "../InputDiv";

export default function ExperienceForm({
  onChange,
  companyName,
  positionTitle,
  location,
  description,
  startDate,
  endDate,
  id,
}) {
  return (
    <form
      className="max-w-sm mx-auto p-4 flex flex-col gap-4 font-sans"
      id={id}
      onSubmit={(e) => e.preventDefault()}
    >
      <InputDiv
        type="text"
        id="company-name"
        labelText="Company"
        value={companyName}
        onChange={onChange}
        data-key="companyName"
      />
      <InputDiv
        type="text"
        id="position-title"
        labelText="Position Title"
        value={positionTitle}
        onChange={onChange}
        data-key="positionTitle"
      />
      <div className="flex justify-center">
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
      <InputDiv
        type="textarea"
        id="description"
        labelText="Description"
        value={description}
        onChange={onChange}
        data-key="description"
      />
    </form>
  );
}
