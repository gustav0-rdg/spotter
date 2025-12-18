import { redirect } from 'next/navigation'
import { MdChevronLeft, MdQuestionMark } from 'react-icons/md'

export default function CadastroPersonal(){
    return (
        <main className="w-screen h-screen flex flex-col gap-2 p-4 md:w-[768px] md:m-auto">
            <header className="flex items-center justify-between py-2">
                <button className="flex items-center gap-1 text-gray-900 font-bold hover:bg-gray-100 p-2 -ml-2 rounded-xl transition-colors"
                onClick={() => {redirect('/login')}}
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
            <article className="flex w-100/100 p-2 bg-gray-200 rounded-xl gap-1 md:gap-4 md:p-4">
                <div className="w-20/100 h-60/100 bg-gray-300 rounded-xl p-1">
                    <MdQuestionMark className='w-full h-full' />
                </div>
                <div className="w-80/100">
                    <h1 className="font-extrabold text-2xl tracking-tight">Melhore sua tutoria</h1>
                    <p className="text-md tracking-tight text-black-900">Todos seus alunos em um só lugar. Escale seu negócio. tenha feedbacks sobre todos os treinos.</p>
                </div>
            </article>
            <section className='flex flex-col gap-2'>
                <h2 className='text-sm font-bold text-gray-900 ml-1'>1. Credenciais da conta</h2>
                <form action="" className='flex flex-col gap-4'>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="nome" className="text-sm font-semibold text-gray-700 ml-1">
                            Nome completo
                        </label>
                        <input 
                            id="nome"
                            type="text" 
                            placeholder=""
                            className='border border-gray-300 rounded-xl p-3 shadow-sm outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all'  
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">
                            Endereço de Email
                        </label>
                        <input 
                            id="email"
                            type="email" 
                            placeholder="exemplo@email.com"
                            className='border border-gray-300 rounded-xl p-3 shadow-sm outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all' 
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="senha" className="text-sm font-semibold text-gray-700 ml-1">
                            Senha
                        </label>
                        <input 
                            id="senha"
                            type="password" 
                            placeholder="••••••••"
                            className='border border-gray-300 rounded-xl p-3 shadow-sm outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all'  
                        />
                    </div>
                </form>
            </section>
            <hr className='w-90/100 mx-auto mt-2 text-gray-300' />
            <section className='flex flex-col gap-2'>
                <h2 className='text-sm font-bold text-gray-900 ml-1'>2. Detalhes profissionais</h2>
                <form action="" className='flex flex-col gap-4'>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="especializacao" className="text-sm font-semibold text-gray-700 ml-1">
                            Especialização
                        </label>
                        <input 
                            id="especializacao"
                            type="text" 
                            placeholder=""
                            className='border border-gray-300 rounded-xl p-3 shadow-sm outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all'  
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="experiencia" className="text-sm font-semibold text-gray-700 ml-1">
                            Anos de experiência
                        </label>
                        <input 
                            id="experiencia"
                            type="number" 
                            placeholder=""
                            className='border border-gray-300 rounded-xl p-3 shadow-sm outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all' 
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="doc" className="text-sm font-semibold text-gray-700 ml-1">
                            Documento comprovatório
                        </label>
                        <input 
                            id="doc"
                            type="file" 
                            placeholder=""
                            className='border border-gray-300 rounded-xl p-3 shadow-sm outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all'  
                        />
                    </div>
                </form>
                <button
                    className='w-full mt-2 rounded-xl h-12 bg-gray-900 text-white font-bold shadow-lg hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300'
                >Cadastrar</button>
                <small className='text-center mb-2'>Ao criar uma conta, você concorda com os Termos de uso e Política de privacidade</small>
            </section>
        </main>
    )
}