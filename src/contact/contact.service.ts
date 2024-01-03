import { Injectable } from '@nestjs/common';
import { ContactDto } from './dto/contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}
  async create(createContactDto: ContactDto) {
    return await this.prisma.contact.create({
      data: {
        name: createContactDto.name.trim(),
        email: createContactDto.name.trim(),
        subject: createContactDto.name.trim(),
        message: createContactDto.name.trim(),
       },
    });
  }

  async findAll() {
    return await this.prisma.contact.findMany();
  }
}
