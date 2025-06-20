import { IsArray, IsDateString, IsInt, IsNumber } from 'class-validator';

export class CreateBanhoDto {
  @IsNumber()
  valorTotal: number;

  @IsDateString()
  data: string;

  @IsInt()
  animalId: number;

  @IsArray()
  @IsNumber({}, { each: true })
  listaServicos: number[];
}
