'use client';

import { useParams } from 'next/navigation'

import CadastroPersonal from "@/views/personal/cadastro"
import CadastroAluno from '@/views/aluno/cadastro';

export default function Cadastro() {
    const { tipo } = useParams<{ tipo: string }>()

    const tela = tipo == 'personal' ? <CadastroPersonal /> : <CadastroAluno />;
        
    return (
        <>
            {tela}
        </>
       
    )
}