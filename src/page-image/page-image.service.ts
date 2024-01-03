import { PageImageDto } from './dto/page-image.dto';


import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PageImageService {
  constructor(private prisma: PrismaService) {}
  async create(createPageImageDto: PageImageDto) {
    if (!createPageImageDto.slug)
      throw new BadRequestException('Name cannot be empty');

    return await this.prisma.pageImage.create({
      data: {
        slug: createPageImageDto.slug.trim(),
        image: createPageImageDto.image.trim(),
        page: createPageImageDto.page.trim() 
      },
    });
  }

  async findAll() {
    return await this.prisma.pageImage.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.pageImage.findUnique({ where: { id } });
  }

  async update(id: string, updatePageImageDto: PageImageDto) {
    return await this.prisma.pageImage.update({
      where: { id },
      data: {
        image: updatePageImageDto.image.trim(),
      }
    });
  }

  async remove(id: string) {
    return await this.prisma.pageImage.delete({ where: { id } });
  }
}
