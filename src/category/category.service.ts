import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryDto } from './dto/category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  async create(createCategoryDto: CategoryDto) {
    if (!createCategoryDto.name)
      throw new BadRequestException('Name cannot be empty');

    return await this.prisma.category.create({
      data: { name: createCategoryDto.name.trim() },
    });
  }

  async findAll() {
    return await this.prisma.category.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.category.findUnique({ where: { id } });
  }

  async update(id: string, updateCategoryDto: CategoryDto) {
    return await this.prisma.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  async remove(id: string) {
    return this.prisma.category.delete({ where: { id } });
  }
}
