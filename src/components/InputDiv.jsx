export default function InputDiv({
    id,
    placeholder,
    type,
    labelText,
    onChange,
    value,
    "data-key": dataKey,

}) {
    return (
        <div className="flex flex-col">
            <label htmlFor={id}
                    className="mb-1 text-sm text-gray-700">
                {labelText}
            </label>
            {type === "textarea" ? (
                <textarea
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    data-key={dataKey}
                    className="border border-gray-300 text-gray-700 rounded-lg px-3 py-2 text-base focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                ></textarea>
            ) : (
                <input
                type={type}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                data-key={dataKey}
                className="border border-gray-300 text-gray-700 rounded-lg px-3 py-2 text-base focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                />
            )}
        </div>
    )
}