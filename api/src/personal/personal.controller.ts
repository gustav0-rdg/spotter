import { Body, Controller, Post } from '@nestjs/common';
import { PersonalService } from './personal.service';

@Controller('')
export class PersonalController {
    constructor(private readonly personalService: PersonalService){}

    @Post('post/academia')
    cadastrarAcademia(@Body() body: { cnpj: string }){
        return this.personalService.cadastrarAcademia(body.cnpj);
    }
}
