import { Test, TestingModule } from '@nestjs/testing';
import { PageImageService } from './page-image.service';

describe('PageImageService', () => {
  let service: PageImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PageImageService],
    }).compile();

    service = module.get<PageImageService>(PageImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
