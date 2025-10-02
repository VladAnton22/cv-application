import { useState, useEffect, createContext, useContext } from "react";
import { ChevronDown } from "react-feather";

const AccordionContext = createContext();

export default function Accordion({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul
      className="mx-auto divide-y divide-gray-300 border-2 border-gray-300 rounded-lg"
      {...props}
    >
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
}

export function AccordionItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordionContext);
  const open = selected === value;

  return (
    <li {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center px-4 py-3 font-medium text-gray-800 hover:bg-gray-50 cursor-pointer"
      >
        <span>{trigger}</span>
        <ChevronDown
          size={18}
          className={`transition-transform text-gray-500 ${
            open ? "rotate-180" : ""
          }`}
        />
      </header>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 text-sm text-gray-700">{children}</div>
      </div>
    </li>
  );
}
