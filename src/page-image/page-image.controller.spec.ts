import { Test, TestingModule } from '@nestjs/testing';
import { PageImageController } from './page-image.controller';
import { PageImageService } from './page-image.service';

describe('PageImageController', () => {
  let controller: PageImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PageImageController],
      providers: [PageImageService],
    }).compile();

    controller = module.get<PageImageController>(PageImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
