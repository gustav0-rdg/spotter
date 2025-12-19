interface inputProps{
    id: string,
    type?: string,
    placeholder: string
}

export function Input({id, type="text", placeholder}: inputProps){
    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className="w-full border border-gray-200 rounded-2xl p-4 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-400 transition-all shadow-sm h-14"
        />
    )
}

interface inputAreaProps {
    id: string,
    type?: string,
    placeholder?: string,
    text: string,
    aditionalClass: string,
};

export function InputArea({id, type="text", placeholder, text, aditionalClass}: inputAreaProps){
    return (
        <div className={`flex flex-col gap-1.5 ${aditionalClass}`}>
            <label htmlFor={id} className="text-sm font-semibold text-gray-600 ml-1">
                {text}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-gray-400 transition-all shadow-sm h-14"
            />
        </div>
    )
}