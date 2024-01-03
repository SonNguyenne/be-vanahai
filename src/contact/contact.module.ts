import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ContactController],
  providers: [ContactService],
  imports: [PrismaModule],
})
export class ContactModule {}
