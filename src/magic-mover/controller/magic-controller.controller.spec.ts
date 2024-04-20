import { Test, TestingModule } from '@nestjs/testing';
import { MagicControllerController } from './magic-controller.controller';

describe('MagicControllerController', () => {
  let controller: MagicControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MagicControllerController],
    }).compile();

    controller = module.get<MagicControllerController>(MagicControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
