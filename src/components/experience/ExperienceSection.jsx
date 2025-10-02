export default function ExperienceSection({ experiences }) {
  return (
    <section className="mt-6">
      <h2 className="font-bold text-lg border-b pb-1">Experience</h2>
      {experiences.length === 0 && (
        <p className="text-sm text-gray-500 mt-2">No experience added yet.</p>
      )}
      {experiences.map((exp) => (
        <div key={exp.id} className="mt-2">
          <div className="font-semibold">
            {exp.positionTitle} @ {exp.companyName}
          </div>
          <div className="text-sm text-gray-600">
            {exp.startDate} - {exp.endDate}
          </div>
          <div className="text-sm text-gray-700">{exp.location}</div>
          {exp.description && (
            <p className="text-sm mt-1">{exp.description}</p>
          )}
        </div>
      ))}
    </section>
  );
}
