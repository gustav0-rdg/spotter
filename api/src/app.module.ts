import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AlunosModule } from './alunos/alunos.module';
import { PersonalModule } from './personal/personal.module';

@Module({
  imports: [UsersModule, AlunosModule, PersonalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
