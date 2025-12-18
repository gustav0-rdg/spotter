"use client";

import { useRouter } from "next/navigation"; // 1. Correção: useRouter para navegação no cliente

export default function Home() {
  const router = useRouter();

  return (
    <main className="w-screen min-h-screen flex flex-col items-center bg-white md:w-[768px] md:m-auto">
      
      {/* Header */}
      <header className="w-full h-24 px-8 flex items-center justify-between">
        {/* Logo mais robusto */}
        <h4 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Spotter
        </h4>
        
        {/* Botão Entrar - Estilo "Pílula" igual ao tema do Login */}
        <button
          className="bg-gray-900 text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-lg hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          onClick={() => router.push('/login')} // 2. Navegação correta
        >
          Entrar
        </button>
      </header>

      {/* Conteúdo Principal */}
      <section className="w-full px-6 mt-12 flex flex-col justify-center items-center gap-8">
        
        {/* Título Principal */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 leading-tight tracking-tight">
          Seu personal trainer <br className="hidden md:block"/> de bolso
        </h1>

        {/* Card de Informação - Estilo Clean */}
        <div className="rounded-3xl bg-gray-50 border border-gray-100 p-8 w-full max-w-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            <p className="text-gray-600 text-lg leading-relaxed text-center font-medium">
                Não adivinhe mais pesos. <span className="text-gray-900 font-bold">Spotter</span> conecta você com um treinador
                profissional e usa predições com IA para ajustar cargas e
                exercícios com base na sua performance.
            </p>
        </div>
      </section>
      
    </main>
  )
}