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
        <div className="">
            <label htmlFor={id}>
                {labelText}
            </label>
            {type === "textarea" ? (
                <textarea
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    data-key={dataKey}
                ></textarea>
            ) : (
                <input
                type={type}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                data-key={dataKey}
                />
            )}
        </div>
    )
}