import { Module } from '@nestjs/common';
import { PageContentService } from './page-content.service';
import { PageContentController } from './page-content.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PageContentController],
  providers: [PageContentService],
  imports: [PrismaModule],
})
export class PageContentModule {}
