import { Injectable } from '@nestjs/common';
import { CreateBanhoDto } from './dto/create-banho.dto';
import { UpdateBanhoDto } from './dto/update-banho.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BanhoService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateBanhoDto) {
    return this.prisma.banho.create({ data });
  }

  async findAll() {
    return this.prisma.banho.findMany();
  }

  async findOne(id: number) {
    return this.prisma.banho.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateBanhoDto) {
    return await this.prisma.banho.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.banho.delete({ where: { id } });
  }
}
