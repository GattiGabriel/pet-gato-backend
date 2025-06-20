/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { CreateBanhoDto } from './dto/create-banho.dto';
import { UpdateBanhoDto } from './dto/update-banho.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BanhoService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateBanhoDto) {
    const { valorTotal, data: dataBanho, animalId, listaServicos } = data;

    return this.prisma.banho.create({
      data: {
        valorTotal,
        data: new Date(dataBanho),
        animalId,
        listaServicos: {
          create: listaServicos.map((servicoId) => ({
            Servico: {
              connect: { id: servicoId },
            },
          })),
        },
      },
      include: {
        listaServicos: true,
      },
    });
  }

  async findAll() {
    return this.prisma.banho.findMany({
      include: {
        listaServicos: {
          include: {
            Servico: true,
          },
        },
        animal: true, // já que você quer o nome do animal também
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.banho.findUnique({
      where: { id },
      include: {
        listaServicos: {
          include: {
            Servico: true,
          },
        },
        animal: true,
      },
    });
  }

  async update(id: number, data: UpdateBanhoDto) {
    const updateData: any = {};

    if (data.valorTotal !== undefined) updateData.valorTotal = data.valorTotal;

    if (data.data) {
      // data.data vem no formato "YYYY-MM-DDTHH:mm" sem 'Z'
      const localDate = new Date(data.data);

      // Corrige o fuso horário somando o offset do local para UTC
      const offsetMs = localDate.getTimezoneOffset() * 60 * 1000; // offset em milissegundos
      const correctedDate = new Date(localDate.getTime() - offsetMs);

      updateData.data = correctedDate;
    }

    if (data.animalId !== undefined) updateData.animalId = data.animalId;

    if (data.listaServicos && Array.isArray(data.listaServicos)) {
      await this.prisma.banhoServico.deleteMany({ where: { banhoId: id } });

      updateData.listaServicos = {
        create: data.listaServicos.map((servicoId) => ({
          Servico: { connect: { id: servicoId } },
        })),
      };
    }

    if (Object.keys(updateData).length === 0) {
      throw new Error('Nenhum dado para atualizar');
    }

    return this.prisma.banho.update({
      where: { id },
      data: updateData,
      include: {
        listaServicos: { include: { Servico: true } },
        animal: true,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.banho.delete({ where: { id } });
  }
}
