interface selectAreaProps {
    id: string;
    text: string;
    options: string[];
    aditionalClass?: string;
}

export function SelectArea({ id, text, options, aditionalClass = "" }: selectAreaProps) {
    return (
        <div className={`flex flex-col gap-1.5 ${aditionalClass}`}>
            <label htmlFor={id} className="text-sm font-semibold text-gray-600 ml-1">
                {text}
            </label>
            <div className="relative">
                <select
                    id={id}
                    defaultValue=""
                    className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-gray-400 transition-all shadow-sm h-14 bg-white text-gray-700 appearance-none cursor-pointer"
                >
                    <option value="" disabled>Selecione a frequência</option>
                    {options.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
                
                {/* Ícone de seta para baixo customizado para manter o estilo limpo */}
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}