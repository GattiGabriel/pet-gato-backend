import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { Injectable } from '@nestjs/common';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from '@prisma/client';

@Injectable()
export class AnimalService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAnimalDto): Promise<Animal> {
    try {
      return await this.prisma.animal.create({
        data: {
          ...data,
          clienteId: data.clienteId,
        },
      });
    } catch (error) {
      console.error('Erro ao criar animal:', error);
      throw new Error('Não foi possível criar o animal.');
    }
  }

  async findAll() {
    return this.prisma.animal.findMany();
  }

  async findOne(id: number) {
    return this.prisma.animal.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateAnimalDto) {
    return await this.prisma.animal.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.animal.delete({ where: { id } });
  }
}
