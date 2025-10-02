import { useState } from "react";
import sampleData from "./sample-data";
import PersonalInfoForm from "./components/personal-info/PersonalInfoForm";
import Resume from "./components/Resume";
import Accordion, { AccordionItem } from "./components/Accordion";
import EditableList from "./components/EditableList";

function App() {
  const [personalInfo, setPersonalInfo] = useState(sampleData.personalInfo);
  const [educations, setEducations] = useState(sampleData.sections.educations);
  const [experiences, setExperiences] = useState(sampleData.sections.experiences);

  function handlePersonalChange(e) {
    const key = e.target.dataset.key;
    const value = e.target.value;

    setPersonalInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  return (
    <div className="w-full h-screen my-6 grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <PersonalInfoForm
            onChange={handlePersonalChange}
            email={personalInfo.email}
            fullName={personalInfo.fullName}
            phoneNumber={personalInfo.phoneNumber}
            address={personalInfo.address}
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          <Accordion>
            <AccordionItem value="1" trigger="Education">
              <EditableList
                type="education"
                initialItems={sampleData.sections.educations}
                onChange={setEducations}
              />
            </AccordionItem>
            <AccordionItem value="2" trigger="Experience">
              <EditableList
                type="experience"
                initialItems={sampleData.sections.experiences}
                onChange={setExperiences}
              />
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="flex flex-col h-full overflow-y-auto">
        <Resume 
        personalInfo={personalInfo}
        educations={educations}
        experiences={experiences} />
      </div>
    </div>
  );
}

export default App;
