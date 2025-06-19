import { Module } from '@nestjs/common';
import { BanhoService } from './banho.service';
import { BanhoController } from './banho.controller';

@Module({
  controllers: [BanhoController],
  providers: [BanhoService],
})
export class BanhoModule {}
