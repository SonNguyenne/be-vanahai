import { Module } from '@nestjs/common';
import { PageImageService } from './page-image.service';
import { PageImageController } from './page-image.controller';

@Module({
  controllers: [PageImageController],
  providers: [PageImageService],
})
export class PageImageModule {}
