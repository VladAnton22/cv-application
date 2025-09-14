import {useState} from "react";
import sampleData from "./sample-data";
import PersonalInfoForm from "./components/personal-info/PersonalInfoForm";
import Resume from "./components/Resume";

function App() {

  const [personalInfo, setPersonalInfo] = useState(sampleData.personalInfo)

function handlePersonalChange(e) {
  const key = e.target.dataset.key;
  const value = e.target.value;

  setPersonalInfo((prev) => ({
    ...prev,
    [key]: value
  }));
}


  return (
    <div className=" md:grid md:grid-cols-2 md:gap-6">
      <div className="mx-auto">
        <PersonalInfoForm 
          onChange={handlePersonalChange}
          email={personalInfo.email}
          fullName={personalInfo.fullName}
          phoneNumber={personalInfo.phoneNumber}
          address={personalInfo.address}
        />
      </div>
      <div className="mx-auto">
        <Resume personalInfo={personalInfo} />
      </div>
    </div>
  )
}

export default App
