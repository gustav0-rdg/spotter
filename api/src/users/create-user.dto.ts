import { IsEmail, IsNotEmpty, IsString, MinLength, IsInt, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  senha: string;

  @IsString()
  @IsNotEmpty()
  role: string
}