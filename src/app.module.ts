import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ClienteModule } from './cliente/cliente.module';
import { AnimalModule } from './animal/animal.module';
import { BanhoModule } from './banho/banho.module';
import { ServicoModule } from './servico/servico.module';
import { RelatorioModule } from './relatorio/relatorio.module';

@Module({
  imports: [
    PrismaModule,
    ClienteModule,
    AnimalModule,
    BanhoModule,
    ServicoModule,
    RelatorioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
