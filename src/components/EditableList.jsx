import { useState } from "react";
import uniqid from "uniqid";
import EditableItem from "./EditableItem";

export default function EditableList({ type, initialItems = [], onChange }) {
  const [items, setItems] = useState(initialItems);

  const updateItems = (newItems) => {
    setItems(newItems);
    onChange?.(newItems);
  };

  const handleChange = (id, e) => {
    const key = e.target.dataset.key;
    const value = e.target.value;
    updateItems(
      items.map((item) => (item.id === id ? { ...item, [key]: value } : item))
    );
  };

  const handleSave = (id) => {
    console.log(
      "Saved:",
      items.find((i) => i.id === id)
    );
  };

  const handleCancel = () => {
    console.log("Cancelled");
  };

  const addItem = () => {
    const empty =
      type === "education"
        ? {
          id: uniqid(),
          schoolName: "",
          degree: "",
          location: "",
          startDate: "",
          endDate: "",
        }
        : {
          id: uniqid(),
          companyName: "",
          positionTitle: "",
          location: "",
          description: "",
          startDate: "",
          endDate: "",
        };

    updateItems([...items, empty]);
  };

  return (
    <div>
      {items.map((item) => (
        <EditableItem
          key={item.id}
          type={type}
          data={item}
          onChange={(e) => handleChange(item.id, e)}
          onSave={() => handleSave(item.id)}
          onCancel={handleCancel}
        />
      ))}
      <button
        onClick={addItem}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        + Add {type === "education" ? "Education" : "Experience"}
      </button>
    </div>
  );
}
