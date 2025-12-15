import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
const bcrypt = require('bcrypt');

@Injectable()
export class UsersService {
    constructor(
        @Inject('MYSQL_POOL')
        private readonly db
    ) {}

    async createNew(data: CreateUserDto){
        const pass = await bcrypt.hash(data.senha, 10);
        console.log(pass);

        const [result] = await this.db.query(`
            INSERT INTO users(nome, email, senha,role)
            VALUES(?,?,?,?)
            `, [data.nome, data.email,pass,data.role]);
        
        if (result){
            return {
                "sucess":true,
                data
            }
        }
    }
}
