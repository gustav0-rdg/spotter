"use client";

import { useState } from 'react'; // 1. Importar useState

export default function LoginGenerico() {
    // 2. Estado para controlar a seleção (começa com 'aluno' selecionado)
    const [selecionado, setSelecionado] = useState('aluno'); 

    return (
        <main 
            className="w-screen gap-3 h-screen flex flex-col justify-center items-center md:w-[768px] md:m-auto"
        >
            <header className="p-2 w-70/100 flex justify-center items-center gap-2 bg-gray-300 rounded-2xl">
                
                {/* Botão Aluno */}
                <button 
                    onClick={() => setSelecionado('aluno')}
                    className={`rounded-2xl p-2 w-48/100 transition-all duration-300 ${
                        selecionado === 'aluno' 
                        ? 'bg-gray-100 shadow-md font-bold' 
                        : 'bg-transparent text-gray-600' 
                    }`}
                >
                    Aluno
                </button>
                <button 
                    onClick={() => setSelecionado('personal')} 
                    className={`rounded-2xl p-2 w-48/100 flex items-center justify-center transition-all duration-300 ${
                        selecionado === 'personal' 
                        ? 'bg-gray-100 shadow-md font-bold'
                        : 'bg-transparent text-gray-600'    
                    }`}
                >
                    Personal
                </button>
            </header>
            <section className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-4xl font-bold '>Bem-vindo de volta</h1>
                <small className='text-sm font-200'>Insira suas credencias para acessar sua conta.</small>

                <form className='flex flex-col w-90/100 gap-2' action="">
                    <label htmlFor="email">Endereço de Email</label>
                    <input type="text" className='border rounded-md p-2' />
                    <label htmlFor="senha">Senha</label>
                    <input type="password" className='border rounded-md p-2'  />
                    <div className='w-100/100 flex justify-end'>
                        <a href="/recuperar-senha" className='text-sky-700 underline'>Esqueceu sua senha?</a>
                    </div>
                    <button className='w-90/100 m-auto rounded-xl h-12 bg-gray-200'>
                        ENTRAR
                    </button>
                </form>
            </section>
        </main>
    )
}