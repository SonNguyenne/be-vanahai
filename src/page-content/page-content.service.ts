import { BadRequestException, Injectable } from '@nestjs/common';
import { PageContentDto } from './dto/page-content.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PageContentService {
  constructor(private prisma: PrismaService) {}
  async create(createPageContentDto: PageContentDto) {
    if (!createPageContentDto.slug)
      throw new BadRequestException('Name cannot be empty');

    return await this.prisma.pageContent.create({
      data: {
        slug: createPageContentDto.slug.trim(),
        content: createPageContentDto.content.trim(),
        page: createPageContentDto.page.trim() 
      },
    });
  }

  async findAll() {
    return await this.prisma.pageContent.findMany();

  }

  async findOne(id: string) {
    return await this.prisma.pageContent.findUnique({ where: { id } });
  }

  async update(id: string, updatePageContentDto: PageContentDto) {
    return await this.prisma.pageContent.update({
      where: { id },
      data: {
        content: updatePageContentDto.content.trim(),
      }
    });
  }

  async remove(id: string) {
    return await this.prisma.pageContent.delete({ where: { id } });
  }
}
