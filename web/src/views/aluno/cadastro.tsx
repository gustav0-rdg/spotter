'use client'

import { 
  MdQuestionMark, 
  MdVpnKey, 
  MdChevronLeft, 
  MdFitnessCenter, 
  MdTrendingUp, 
  MdAccessibility, 
  MdSpeed, 
  MdHealing, 
  MdSelfImprovement 
} from "react-icons/md"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"

// Interfaces TypeScript
interface ObjectiveButtonProps {
    label: string;
    icon: ReactNode;
    active?: boolean;
    onClick?: () => void;
}

interface IconProps {
    className?: string;
}

export default function CadastroAluno() {
    const router = useRouter();

    return (
        // Layout Wrapper igual ao da Home
        <main className="w-screen min-h-screen flex flex-col items-center bg-white md:w-[768px] md:m-auto">
            
            {/* Header consistente com a Home */}
            <header className="w-full px-6 pt-8 pb-4 flex flex-col gap-6">
                <button 
                    type="button"
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors self-start"
                    onClick={() => router.back()}
                >
                    <MdChevronLeft className="w-6 h-6" />
                    <span className="text-sm font-bold">Voltar</span>
                </button>
                
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 leading-tight">
                        Crie seu perfil
                    </h1>
                    <p className="text-gray-600 font-medium mt-1">
                        Preencha seus dados para começar.
                    </p>
                </div>
            </header>

            <div className="w-full px-6 pb-10 flex flex-col gap-8">

                {/* --- SEÇÃO 1: CREDENCIAIS --- */}
                <section className="flex flex-col gap-6">
                    
                    {/* Banner Informativo (Estilo Card da Home) */}
                    <article className="rounded-3xl bg-gray-50 border border-gray-100 p-6 flex gap-4 items-start shadow-sm">
                        <div className="shrink-0 text-gray-900 mt-1">
                            <MdQuestionMark className="w-6 h-6" />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed font-medium">
                            <span className="text-gray-900 font-bold">Spotter</span> usa seus dados para calibrar as cargas iniciais com IA.
                        </p>
                    </article>

                    <form className="flex flex-col gap-5">
                        
                        {/* INPUT ESPECIAL: Chave do Treinador */}
                        <div className="flex flex-col gap-2">
                             <div className="flex items-center gap-2 ml-2">
                                <MdVpnKey className="text-gray-900" />
                                <label htmlFor="chave" className="text-sm font-bold text-gray-900">Chave do Treinador</label>
                            </div>
                            <input 
                                id="chave"
                                type="text" 
                                placeholder="H789-Z19"
                                // Estilo baseado no Card da Home: bg-gray-50, border-gray-100
                                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 font-bold tracking-widest text-center uppercase outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all shadow-sm"
                            />
                        </div>

                        {/* INPUTS NORMAIS */}
                        <div className="space-y-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-gray-900 ml-2">Nome completo</label>
                                <input 
                                    type="text" 
                                    // Mantendo a consistência visual
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 font-medium outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all shadow-sm"
                                    placeholder="Seu nome"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-gray-900 ml-2">E-mail</label>
                                <input 
                                    type="email" 
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 font-medium outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all shadow-sm"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-gray-900 ml-2">Senha</label>
                                <input 
                                    type="password" 
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 font-medium outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all shadow-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                    </form>
                </section>

                <hr className="border-gray-100" />

                {/* --- SEÇÃO 2: PERFIL DE TREINO --- */}
                <section className="flex flex-col gap-6">
                    <h2 className="text-xl font-extrabold tracking-tight text-gray-900">
                        Objetivo Principal
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-3">
                        <ObjectiveButton label="Hipertrofia" icon={<MdFitnessCenter/>} active={true} />
                        <ObjectiveButton label="Força" icon={<MdTrendingUp/>} />
                        <ObjectiveButton label="Perda de Peso" icon={<MdSpeed/>} />
                        <ObjectiveButton label="Resistência" icon={<MdDirectionsRun/>} />
                        <ObjectiveButton label="Mobilidade" icon={<MdAccessibility/>} />
                        <ObjectiveButton label="Reabilitação" icon={<MdHealing/>} />
                    </div>

                    <div className="flex flex-col gap-3 mt-4">
                        <span className="text-sm font-bold text-gray-900 ml-2">Tempo de treino</span>
                        <div className="flex p-1.5 bg-gray-50 border border-gray-100 rounded-full">
                            <button type="button" className="flex-1 py-2.5 text-sm font-bold text-white bg-gray-900 rounded-full shadow-md transition-all">
                                Iniciante
                            </button>
                            <button type="button" className="flex-1 py-2.5 text-sm font-bold text-gray-500 hover:text-gray-900 transition-all">
                                Intermed.
                            </button>
                            <button type="button" className="flex-1 py-2.5 text-sm font-bold text-gray-500 hover:text-gray-900 transition-all">
                                Avançado
                            </button>
                        </div>
                    </div>
                </section>

                {/* Botão Principal (Estilo Home) */}
                <div className="mt-2">
                    <button 
                        type="button" 
                        className="w-full bg-gray-900 text-white font-bold text-lg py-4 rounded-full shadow-lg hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Finalizar Cadastro
                    </button>
                </div>
            </div>
        </main>
    )
}

// Componente auxiliar mantendo o estilo visual clean
function ObjectiveButton({ label, icon, active = false, onClick }: ObjectiveButtonProps) {
    return (
        <button 
            type="button"
            onClick={onClick}
            className={`
                flex flex-col items-center justify-center gap-3 p-4 rounded-3xl border transition-all duration-300 h-32
                ${active 
                    ? 'bg-gray-900 text-white border-gray-900 shadow-lg' 
                    : 'bg-gray-50 text-gray-600 border-gray-100 hover:border-gray-300 hover:shadow-md'}
            `}
        >
            <div className={`text-2xl ${active ? 'text-white' : 'text-gray-400'}`}>
                {icon || <MdSelfImprovement/>}
            </div>
            <span className="font-bold text-sm tracking-tight">{label}</span>
        </button>
    )
}

function MdDirectionsRun({ className }: IconProps) { 
    return <span className={className}>🏃</span> 
}