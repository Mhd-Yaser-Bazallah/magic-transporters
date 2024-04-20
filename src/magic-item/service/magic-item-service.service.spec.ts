import { Test, TestingModule } from '@nestjs/testing';
import { MagicItemServiceService } from './magic-item.service';

describe('MagicItemServiceService', () => {
  let service: MagicItemServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MagicItemServiceService],
    }).compile();

    service = module.get<MagicItemServiceService>(MagicItemServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
