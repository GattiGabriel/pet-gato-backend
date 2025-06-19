import { Test, TestingModule } from '@nestjs/testing';
import { BanhoController } from './banho.controller';
import { BanhoService } from './banho.service';

describe('BanhoController', () => {
  let controller: BanhoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BanhoController],
      providers: [BanhoService],
    }).compile();

    controller = module.get<BanhoController>(BanhoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
