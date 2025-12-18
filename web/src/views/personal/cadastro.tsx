import { redirect } from 'next/navigation'
import { MdChevronLeft, MdQuestionMark } from 'react-icons/md'

export default function CadastroPersonal() {
    return (
        // MUDANÇA: bg-white no mobile, bg-gray-50 no desktop para destacar o card
        <main className="min-h-screen w-full flex flex-col items-center bg-white md:bg-gray-50 md:justify-center md:py-10">
            
            {/* MUDANÇA: Card responsivo (Mobile: full width / Desktop: max-w-2xl com sombra e bordas) */}
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

                {/* Banner - Ajustado para usar flex-shrink e gap padrão */}
                <article className="flex w-full p-2 bg-gray-100 rounded-xl gap-3 items-center md:p-4">
                    <div className="shrink-0 w-16 h-16 bg-gray-200 rounded-xl p-3 flex items-center justify-center text-gray-600">
                        <MdQuestionMark className='w-full h-full' />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-extrabold text-lg leading-tight text-gray-900">Melhore sua tutoria</h1>
                        <p className="text-xs text-gray-600 leading-snug">Todos seus alunos em um só lugar. Escale seu negócio e tenha feedbacks sobre todos os treinos.</p>
                    </div>
                </article>

                <section className='flex flex-col gap-3'>
                    <h2 className='text-sm font-bold text-gray-900 ml-1'>1. Credenciais da conta</h2>
                    
                    {/* MUDANÇA: Grid System (2 colunas no desktop) */}
                    <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="nome" className="text-sm font-semibold text-gray-700 ml-1">
                                Nome completo
                            </label>
                            <input
                                id="nome"
                                type="text"
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

                        {/* Senha ocupa largura total no grid mobile, e pode ocupar total ou parcial no desktop. Aqui deixei col-span-2 (total) por estética */}
                        <div className="flex flex-col gap-1.5 md:col-span-2">
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

                <hr className='w-full border-t border-gray-200 my-1' />

                <section className='flex flex-col gap-3'>
                    <h2 className='text-sm font-bold text-gray-900 ml-1'>2. Detalhes profissionais</h2>
                    
                    {/* MUDANÇA: Grid System para a segunda seção */}
                    <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="especializacao" className="text-sm font-semibold text-gray-700 ml-1">
                                Especialização
                            </label>
                            <input
                                id="especializacao"
                                type="text"
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
                                className='border border-gray-300 rounded-xl p-3 shadow-sm outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all'
                            />
                        </div>

                        <div className="flex flex-col gap-1.5 md:col-span-2">
                            <label htmlFor="doc" className="text-sm font-semibold text-gray-700 ml-1">
                                Documento comprovatório
                            </label>
                            <input
                                id="doc"
                                type="file"
                                className='border border-gray-300 bg-white rounded-xl p-2 shadow-sm outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200'
                            />
                        </div>
                    </form>

                    <div className="mt-4 flex flex-col gap-2">
                        <button
                            className='w-full rounded-xl h-12 bg-gray-900 text-white font-bold shadow-lg hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300'
                        >
                            Cadastrar
                        </button>
                        <small className='text-center text-gray-500 text-xs'>
                            Ao criar uma conta, você concorda com os Termos de uso e Política de privacidade
                        </small>
                    </div>
                </section>
            </div>
        </main>
    )
}