export default function Input(prop) {
    return (
        <div className="flex flex-col">
            <label htmlFor={prop.id}>{prop.name}</label>
            <input
                onChange={prop.onChange}
                id={prop.id}
                type={prop.type}
                placeholder={prop.placeholder}
                className={`border border-gray-300 ${prop.width}`}
            />
        </div>
    )
}