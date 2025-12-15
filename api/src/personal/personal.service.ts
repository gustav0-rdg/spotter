import { Inject, Injectable } from '@nestjs/common';
const bcrypt = require('bcrypt');

@Injectable()
export class PersonalService {
    constructor(
        @Inject('MYSQL_ROOT')
        private readonly db
    ) {}

    private cnaesValidos = [
        9312500, // Atividades de condicionamento físico
        9319100, // Atividades esportivas não especificadas anteriormente
        9312900, // Outras atividades esportivas
    ];

    async cadastrarAluno(data: {nome: string, email: string, senha: string, role: string}){
        const pass = await bcrypt.hash(data.senha);
        const [result] = this.db.query('INSERT INTO usuarios(nome, email, senha, role)VALUES(?,?,?,?)'
            ,[data.nome, data.email, pass, data.role]
        );

        if (result){
            return {
                "sucess": true,
                data
            }
        }
    }

    async cadastrarAcademia(cnpj: string) {
        const url = `https://api.cnpja.com/office/${cnpj}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Falha ao buscar informações da academia');
        }

        const data = await response.json();

        if (!data || !data.company) {
            throw new Error('Dados inválidos retornados pela API');
        }


        const mainCnae = data.mainActivity?.id;
        const sideCnaes = data.sideActivities?.map((act: { id: number }) => act.id) || [];
        const todosCnaes = [mainCnae, ...sideCnaes];
    
        const valido = todosCnaes.some((id) => this.cnaesValidos.includes(id));

        if (!valido) {
            throw new Error('CNAE não corresponde a uma academia válida');
        }

        const endereco = `${data.address.street}, ${data.address.number}${data.address.details ? ', ' + data.address.details : ''}, ${data.address.district}, ${data.address.city} - ${data.address.state}, CEP: ${data.address.zip}`;

        const [result] = this.db.query(`
            INSERT INTO academias(cnpj, nome, endereco)
            VALUES(?,?,?)
            `, [data.taxId, data.company.name, endereco]);

        return result;
    }
}
