import PersonalInfoSection from "./personal-info/PersonalInfoSection";
import EducationSection from "./education/EducationSection";
import ExperienceSection from "./experience/ExperienceSection";

export default function Resume({ personalInfo, educations, experiences }) {
  return (
    <div className="p-6 border rounded-lg shadow">
      <PersonalInfoSection
        fullName={personalInfo.fullName}
        email={personalInfo.email}
        phoneNumber={personalInfo.phoneNumber}
        address={personalInfo.address}
      />
      <EducationSection educations={educations} />
      <ExperienceSection experiences={experiences} />
    </div>
  );
}
