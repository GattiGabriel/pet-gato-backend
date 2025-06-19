import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  nome: string;

  @IsString()
  bairro: string;

  @IsString()
  rua: string;

  @IsString()
  numero: string;

  @IsString()
  complemento: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsString()
  telefone: string;
}
