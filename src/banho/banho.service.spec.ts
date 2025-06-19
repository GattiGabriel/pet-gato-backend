import { Test, TestingModule } from '@nestjs/testing';
import { BanhoService } from './banho.service';

describe('BanhoService', () => {
  let service: BanhoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BanhoService],
    }).compile();

    service = module.get<BanhoService>(BanhoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
