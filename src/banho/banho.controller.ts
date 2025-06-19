import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BanhoService } from './banho.service';
import { CreateBanhoDto } from './dto/create-banho.dto';
import { UpdateBanhoDto } from './dto/update-banho.dto';

@Controller('banho')
export class BanhoController {
  constructor(private readonly banhoService: BanhoService) {}

  @Post()
  create(@Body() createBanhoDto: CreateBanhoDto) {
    return this.banhoService.create(createBanhoDto);
  }

  @Get()
  findAll() {
    return this.banhoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.banhoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBanhoDto: UpdateBanhoDto) {
    return this.banhoService.update(+id, updateBanhoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.banhoService.remove(+id);
  }
}
