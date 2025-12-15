import { Inject, Injectable } from '@nestjs/common';
import type { Pool } from 'mysql2/promise';
@Injectable()
export class UsuariosService {
    constructor(
        @Inject('MYSQL_POOL')
        private readonly db: Pool
    ) {}

    async findAll(){
        const [rows] = await this.db.query(`
            SELECT * FROM users;
            `)
        return rows;
    }
}
