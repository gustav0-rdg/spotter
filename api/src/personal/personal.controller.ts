import { Body, Controller, Post } from '@nestjs/common';
import { PersonalService } from './personal.service';

@Controller('')
export class PersonalController {
    constructor(private readonly personalService: PersonalService){}

    @Post('post/aluno')
    cadastrarAluno(@Body() body: {nome: string, email: string, senha: string, role: string}){
        return this.personalService.cadastrarAluno(body)
    }
}
