import { redirect } from "next/navigation";

export default function Home(){
  return(
    <main className="spotter h-screen w-screen flex flex-col md:w-[768px] md:h-screen md:flex md:flex-col md:items-center m-auto">
      <header className="spotter__header  w-full h-20 px-8 flex items-center gap-16 justify-around">
        <h4 className="ml-2 text-2xl font-semibold tracking-wide">Spotter</h4>
        <button
          className="bg-[var(--btn-bg)] rounded-full w-35/100 h-35/100 md:w-20/100 md:h-50/100"
        >
          Entrar</button>
      </header>
      <main className="w-full p-4 flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-bold text-center">Seu personal trainer de bolso</h1>
        <div className="rounded-xl bg-[var(--card-bg)] p-6 h-auto shadow-lg">
            <p className="">Não adivinhe mais pesos. Spotter conecta você com um treinador profissional e usa predições com IA para ajustar cargas e exercicíos com base na sua perfomance.</p>

        </div>
      </main>
      
    </main>
  )
}