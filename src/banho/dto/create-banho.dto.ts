import { IsDateString, IsInt, IsNumber } from 'class-validator';

export class CreateBanhoDto {
  @IsNumber()
  valorTotal: number;

  @IsDateString()
  data: string;

  @IsInt()
  animalId: number;
}
