"use client";

import { useState } from 'react';
import { InputArea } from '@/components/Input/Input';
export default function LoginGenerico() {
    const [selecionado, setSelecionado] = useState('aluno'); 

    return (
        <main 
            className="w-screen min-h-screen flex flex-col items-center pt-20 bg-white md:w-[768px] md:m-auto"
        >
            <header className="p-1.5 w-[70%] max-w-sm flex justify-center items-center gap-2 bg-gray-200 rounded-full shadow-inner">
                <button 
                    onClick={() => setSelecionado('aluno')}
                    className={`rounded-full p-2 w-1/2 transition-all duration-300 text-sm ${
                        selecionado === 'aluno' 
                        ? 'bg-white shadow-md text-gray-900 font-bold' 
                        : 'bg-transparent text-gray-500 font-medium hover:text-gray-700' 
                    }`}
                >
                    Aluno
                </button>
                <button 
                    onClick={() => setSelecionado('personal')} 
                    className={`rounded-full p-2 w-1/2 flex items-center justify-center transition-all duration-300 text-sm ${
                        selecionado === 'personal' 
                        ? 'bg-white shadow-md text-gray-900 font-bold'
                        : 'bg-transparent text-gray-500 font-medium hover:text-gray-700'    
                    }`}
                >
                    Personal
                </button>
            </header>
            <section className='flex flex-col justify-center items-center gap-6 mt-12 w-full px-6'>
                <div className="text-center space-y-2">
                    <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight'>
                        Bem-vindo de volta
                    </h1>
                    <p className='text-gray-500 text-sm'>
                        Insira suas credenciais para acessar sua conta de <span className="font-semibold">{selecionado}</span>.
                    </p>
                </div>

                <form className='flex flex-col w-full max-w-sm gap-5' action="">
                    <InputArea 
                        id='email'
                        type='email'
                        text='Endereço de Email'
                        aditionalClass=''
                        placeholder='exemplo@email.com'
                    />
                    <InputArea 
                        id='senha'
                        type='password'
                        placeholder='••••••••'
                        aditionalClass=''
                        text='Senha'
                    />
                    <div className='w-full flex justify-end'>
                        <a href="/recuperar-senha" className='text-sm text-gray-600 hover:text-black font-medium transition-colors'>
                            Esqueceu sua senha?
                        </a>
                    </div>
                    <button className='w-full mt-2 rounded-xl h-12 bg-gray-900 text-white font-bold shadow-lg hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300'>
                        ENTRAR
                    </button>
                    <a className='underline' href={`/cadastro/${selecionado}`}>Ainda não tem uma conta? Cadastre-se.</a>
                </form>
            </section>
        </main>
    )
}