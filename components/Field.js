export default function Field({label, name, type, className}) {
    const addClassName = className ? ` ${className}` : "";
    const formControlClass = `bg-transparent border border-primarygray-300 py-3 px-6 w-full ${addClassName}`;
    return (
        <div className="mb-6">
            <label htmlFor={name} className="block mb-1 font-semibold text-sm ">{label}</label>
            {
                type !== 'textarea' && (
                    <input type={type} name={name} id={name} className={formControlClass} />
                )
            }

            {
                type === 'textarea' && (
                    <textarea name={name} id={name} className={formControlClass} ></textarea>
                )
            }
        </div>
    );
};
