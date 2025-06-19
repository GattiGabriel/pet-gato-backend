import { Injectable } from '@nestjs/common';
import { CreateRelatorioDto } from './dto/create-relatorio.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RelatorioService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateRelatorioDto) {
    return this.prisma.relatorio.create({ data });
  }

  async findAll() {
    return this.prisma.relatorio.findMany();
  }

  async findOne(id: number) {
    return this.prisma.relatorio.findUnique({ where: { id } });
  }

  async remove(id: number) {
    return this.prisma.relatorio.delete({ where: { id } });
  }
}
