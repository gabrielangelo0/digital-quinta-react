export default function Input(prop) {
    console.log(prop);

    return (
        <div className="flex flex-col">
            <label htmlFor={prop.id}>{prop.name}</label>
            <input
                id={prop.id}
                type={prop.type}
                placeholder={prop.placeholder}
                className="border border-gray-300"
            />
        </div>
    )
}