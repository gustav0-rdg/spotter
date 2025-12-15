import { Inject, Injectable } from '@nestjs/common';
const bcrypt = require('bcrypt');

@Injectable()
export class PersonalService {
    constructor(
        @Inject('MYSQL_POOL')
        private readonly db
    ) {}

    private cnaesValidos = [
        93131100, // Atividades de condicionamento físico
        85911100, // Atividades esportivas não especificadas anteriormente
        4763602, // Outras atividades esportivas
    ];

    async cadastrarAcademia(cnpj: string) {
        const cnpjLimpo = cnpj.replace(/\D/g, ''); 
        if (cnpjLimpo.length !== 14) {
            throw new Error('CNPJ inválido: Verifique a quantidade de dígitos.');
        }

        try {
            const url = `https://open.cnpja.com/office/${cnpjLimpo}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Erro ao consultar CNPJ: ${response.statusText}`);
            }

            const data = await response.json();
            if (!data || !data.company) {
                throw new Error('CNPJ não encontrado ou dados inválidos.');
            }

            const mainCnae = data.mainActivity?.id;
            const sideCnaes = data.sideActivities?.map((act: { id: number }) => act.id) || [];
            const todosCnaes = [mainCnae, ...sideCnaes];

            const valido = todosCnaes.some((id) => this.cnaesValidos.includes(id));

            if (!valido) {
                throw new Error('O CNAE deste CNPJ não corresponde a uma atividade de academia/esporte.');
            }
            const endereco = `${data.address.street}, ${data.address.number}${data.address.details ? ', ' + data.address.details : ''}, ${data.address.district}, ${data.address.city} - ${data.address.state}, CEP: ${data.address.zip}`;

            const [result] = await this.db.query(`
                INSERT INTO academias(cnpj, nome, endereco)
                VALUES(?,?,?)
            `, [data.taxId, data.company.name, endereco]);

            return result;

        } catch (error) {
            console.error('Erro no cadastro de academia:', error.message);
            throw error; 
        }
    }

    async cadastrarPersonal(data: {id_user: number, cnpj_academia: number, cref: string}){
        const id_academia = await this.db.query('select id_academia from academias where cnpj = ?', [data.cnpj_academia]);
        if (!id_academia){
            throw new Error('Academia inválida. Insira um CNPJ válido de academia ou cadastre uma nova.')
        }
        const [result] = await this.db.query(`
            INSERT INTO 
            `)
    }
}
