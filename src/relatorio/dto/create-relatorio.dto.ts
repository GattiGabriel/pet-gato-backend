import { IsDateString, IsString } from 'class-validator';

export class CreateRelatorioDto {
  @IsDateString()
  dataCriacao: string;

  @IsString()
  documento: string;
}
