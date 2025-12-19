interface ButtonProps {
    text: string
}

export function Button({text}: ButtonProps){
    return (
        <button className='w-full mt-2 rounded-xl h-12 bg-gray-900 text-white font-bold shadow-lg hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300'>
            {text}
        </button>
    )
}