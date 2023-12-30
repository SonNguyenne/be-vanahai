import { Module } from '@nestjs/common';
import { PageContentService } from './page-content.service';
import { PageContentController } from './page-content.controller';

@Module({
  controllers: [PageContentController],
  providers: [PageContentService],
})
export class PageContentModule {}
