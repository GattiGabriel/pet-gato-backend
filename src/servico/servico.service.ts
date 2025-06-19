import { Injectable } from '@nestjs/common';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServicoService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateServicoDto) {
    return this.prisma.servico.create({ data });
  }

  async findAll() {
    return this.prisma.servico.findMany();
  }

  async findOne(id: number) {
    return this.prisma.servico.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateServicoDto) {
    return await this.prisma.servico.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.servico.delete({ where: { id } });
  }
}
