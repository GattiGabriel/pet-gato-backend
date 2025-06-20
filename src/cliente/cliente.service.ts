import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateClienteDto) {
    return this.prisma.cliente.create({ data });
  }

  async findAll() {
    return this.prisma.cliente.findMany({ include: { listaPets: true } });
  }

  async findOne(id: number) {
    return this.prisma.cliente.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateClienteDto) {
    return this.prisma.cliente.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.cliente.delete({ where: { id } });
  }
}
