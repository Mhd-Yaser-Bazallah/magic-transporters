import { Test, TestingModule } from '@nestjs/testing';
import { MagicItemController  } from './magic-item.controller';

describe('MagicItemControllerController', () => {
  let controller: MagicItemController ;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MagicItemController],
    }).compile();

    controller = module.get<MagicItemController>(MagicItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
