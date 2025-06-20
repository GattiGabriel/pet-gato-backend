import { IsNumber, IsOptional, IsDateString, IsArray } from 'class-validator';

export class UpdateBanhoDto {
  @IsOptional()
  @IsNumber()
  valorTotal?: number;

  @IsOptional()
  @IsDateString()
  data?: Date | string;

  @IsOptional()
  @IsNumber()
  animalId?: number;

  @IsOptional()
  @IsArray()
  listaServicos?: number[];
}
