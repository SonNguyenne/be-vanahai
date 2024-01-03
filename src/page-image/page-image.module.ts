import { Module } from '@nestjs/common';
import { PageImageService } from './page-image.service';
import { PageImageController } from './page-image.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PageImageController],
  providers: [PageImageService],
  imports: [PrismaModule],
})
export class PageImageModule {}
