export default function Input(prop) {
    console.log(prop);

    return (
        <div className="flex flex-col">
            <label htmlFor="">{prop.name}</label>
            <input className="border border-gray-300" />
        </div>
    )
}