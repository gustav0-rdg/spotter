"use client";

import { MdQuestionMark, MdVpnKey, MdChevronLeft, MdDirectionsRun, MdHealing, MdAccessibilityNew } from "react-icons/md"
import { FaFire, FaDumbbell } from "react-icons/fa6"
import { GiBiceps } from "react-icons/gi"
import { redirect } from "next/navigation"
import { useState } from "react";


// Importação de componentes para agilizar o desenvolvimento
import { SelectArea } from "@/components/Select/Select";
import { Input, InputArea } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
export default function CadastroAluno() {
    
    const objetivos = [
        { label: "Hipertrofia", foco: 'hipertrofia', icon: GiBiceps, active: true },
        { label: "Força", foco: 'forca', icon: FaDumbbell, active: false },
        { label: "Emagrecimento", foco: 'emagrecimento', icon: FaFire, active: false },
        { label: "Resistência", foco: 'resistencia', icon: MdDirectionsRun, active: false },
        { label: "Mobilidade", foco: 'mobilidade', icon: MdAccessibilityNew, active: false },
        { label: "Reabilitação", foco: 'reabilitacao',icon: MdHealing, active: false },
    ]

    const [foco, setFoco] = useState("");
    
    const frequencias = [
        "1 - 2 dias",
        "3 dias",
        "4 dias",
        "5 dias"
    ];

    return (
        <main className="min-h-screen w-full flex flex-col items-center bg-white md:bg-gray-50 md:justify-center md:py-10">

            <div className="w-full h-full flex flex-col gap-6 p-6 max-w-md md:max-w-2xl bg-white md:shadow-xl md:rounded-3xl md:p-10 transition-all">

                <header className="flex items-center justify-between py-2">
                    <button 
                        className="flex items-center gap-1 text-gray-900 font-bold hover:bg-gray-100 p-2 -ml-2 rounded-xl transition-colors"
                        onClick={() => { redirect('/login') }}
                    >
                        <MdChevronLeft className="w-6 h-6" />
                        <span>Voltar</span>
                    </button>

                    <div className="flex text-center flex-col">
                        <h1 className="font-extrabold text-lg leading-tight text-gray-900">
                            Crie Seu Perfil
                        </h1>
                        <p className="text-xs text-gray-500 font-medium">
                            Preencha os campos
                        </p>
                    </div>
                </header>

                <article className="flex w-full bg-gray-100 rounded-3xl p-4 gap-4 items-center">
                    <div className="shrink-0 w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-800">
                        <MdQuestionMark className="w-8 h-8" />
                    </div>

                    <div className="flex flex-col">
                        <h1 className="font-extrabold text-lg leading-tight text-gray-900">
                            Nos conte sobre você
                        </h1>
                        <p className="text-xs text-gray-600 mt-1 leading-snug">
                            Spotter usa os dados fornecidos para calibrar sessões de treino personalizadas.
                        </p>
                    </div>
                </article>

                <section className="flex flex-col w-full gap-4">
                    <h2 className="text-sm font-bold text-black ml-1">
                        1. Credenciais da conta
                    </h2>
                    
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div className="flex flex-col gap-2 md:col-span-2">
                            <div className="flex items-start gap-3 mb-1">
                                <div className="p-2 bg-gray-100 rounded-lg text-gray-700">
                                    <MdVpnKey className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm text-gray-900">Chave do Treinador</h3>
                                    <p className="text-xs text-gray-500">Insira a chave de acesso de seu treinador</p>
                                </div>
                            </div>
                            <Input id="chave" placeholder="Chave de acesso (ex: H123-J321)"  />
                        </div>

                        <InputArea 
                            id="nome" 
                            text="Nome completo" 
                            placeholder="Seu nome completo"
                            aditionalClass="" 
                        />

                        <InputArea 
                            id="email" 
                            type="email" 
                            text="Endereço de Email" 
                            placeholder="exemplo@email.com"
                            aditionalClass=""
                        />

                        <InputArea 
                            id="senha" 
                            type="password" 
                            text="Senha" 
                            placeholder="••••••••"
                            aditionalClass="md:col-span-2"
                        />

                    </form>
                </section>

                <hr className='w-full border-t border-gray-200 my-2' />

                <section className="flex flex-col w-full gap-3">
                    <h2 className="text-sm font-bold text-black ml-1">
                        2. Perfil de treino
                    </h2>

                    <div className="flex flex-col gap-2">
                        <small className="text-sm font-thin text-black ml-1">Objetivo Principal</small>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
                            {objetivos.map((obj) => (
                                <button 
                                    key={obj.label}
                                    className={`
                                        h-[100px] md:h-[120px] rounded-2xl shadow-sm text-sm font-medium transition-all
                                        flex flex-col items-center justify-center gap-2
                                        hover:bg-gray-300 hover:scale-[1.02] active:scale-95
                                        ${foco === obj.foco 
                                            ? "bg-gray-900 text-white font-bold shadow-lg hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300" 
                                            : "bg-gray-100 border-2 border-transparent text-gray-500"}
                                    `}
                                    onClick={() => {setFoco(obj.foco);}}
                                >
                                    <obj.icon className={`w-6 h-6 md:w-8 md:h-8 ${obj.active ? "text-gray-500" : "text-gray-400"}`} />
                                    <span>{obj.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-2">
                        <small className="text-sm font-thin text-black ml-1">Nível de experiência</small>
                        
                        <div className="grid grid-cols-3 gap-3 w-full">
                            {["0 - 2 anos", "2 - 5 anos", "5+ anos"].map((nivel) => (
                                <button key={nivel} className="h-[45px] bg-gray-100 rounded-xl text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
                                    {nivel}
                                </button>
                            ))}
                        </div>
                    </div>
                    <SelectArea 
                        id="frequencia"
                        text="Disponibilidade semanal"
                        options={frequencias}
                    />
                </section>
                <Button text="Cadastrar" />
            </div>
        </main>
    )
}