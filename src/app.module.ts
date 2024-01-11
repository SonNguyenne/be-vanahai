import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PageImageModule } from './page-image/page-image.module';
import { PageContentModule } from './page-content/page-content.module';
import { ContactModule } from './contact/contact.module';
import { CategoryModule } from './category/category.module';
import { PrismaModule } from './prisma/prisma.module';
import { NewModule } from './new/new.module';

@Module({
  imports: [
    ProductModule,
    PageImageModule,
    PageContentModule,
    ContactModule,
    CategoryModule,
    PrismaModule,
    NewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
