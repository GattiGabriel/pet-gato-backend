import { IsInt, IsString } from 'class-validator';

export class CreateAnimalDto {
  @IsString()
  nome: string;

  @IsString()
  raca: string;

  @IsString()
  porte: string;

  @IsInt()
  idade: number;

  @IsString()
  observacao: string;

  @IsInt()
  clienteId: number;
}
