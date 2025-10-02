export default function EducationSection({ educations }) {
  return (
    <section className="mt-6">
      <h2 className="font-bold text-lg border-b pb-1">Education</h2>
      {educations.length === 0 && (
        <p className="text-sm text-gray-500 mt-2">No education added yet.</p>
      )}
      {educations.map((edu) => (
        <div key={edu.id} className="mt-2">
          <div className="font-semibold">
            {edu.degree} @ {edu.schoolName}
          </div>
          <div className="text-sm text-gray-600">
            {edu.startDate} - {edu.endDate}
          </div>
          <div className="text-sm text-gray-700">{edu.location}</div>
        </div>
      ))}
    </section>
  );
}
