import { IsString } from 'class-validator';

export class CreateServicoDto {
  @IsString()
  nome: string;
}
