import { useState } from "react";
import EducationForm from "./education/EducationForm";
import ExperienceForm from "./experience/ExperienceForm";
import { ChevronDown, ChevronUp } from "react-feather";

export default function EditableItem({
  type, // "education" | "experience"
  data,
  onChange,
  onSave,
  onCancel,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border rounded-lg my-2">
      <div
        className="cursor-pointer font-bold flex justify-between p-2 hover:bg-gray-50"
        onClick={toggleOpen}
      >
        <span>
          {type === "education"
            ? data.schoolName || "New Education"
            : data.companyName || "New Experience"}
        </span>
        <span>{isOpen ? <ChevronUp size={14}/> : <ChevronDown size={14} />}</span>
      </div>

      {isOpen &&
        (type === "education" ? (
          <EducationForm
            {...data}
            onChange={onChange}
            save={onSave}
            cancel={() => {
              setIsOpen(false);
              onCancel?.();
            }}
          />
        ) : (
          <ExperienceForm
            {...data}
            onChange={onChange}
            save={onSave}
            cancel={() => {
              setIsOpen(false);
              onCancel?.();
            }}
          />
        ))}
    </div>
  );
}
