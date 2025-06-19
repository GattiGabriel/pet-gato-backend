import { PartialType } from '@nestjs/mapped-types';
import { CreateBanhoDto } from './create-banho.dto';

export class UpdateBanhoDto extends PartialType(CreateBanhoDto) {}
