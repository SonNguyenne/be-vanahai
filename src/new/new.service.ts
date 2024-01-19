import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NewDto } from './dto/new.dto';

@Injectable()
export class NewService {
  constructor(private prisma: PrismaService) {}
  async create(image: Express.Multer.File, createNewDto: NewDto) {
    const imageBuffer = image.buffer;
    const imageData = Buffer.from(imageBuffer).toString('base64');
    return await this.prisma.informationNew.create({
      data: {
        name: createNewDto.name.trim(),
        image: `data:image/png;base64,${imageData}`,
        description: createNewDto.description
          ? createNewDto.description.trim()
          : null,
      },
    });
  }

  async findAll() {
    return await this.prisma.informationNew.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.informationNew.findUnique({ where: { id } });
  }

  async update(id: string, image: Express.Multer.File, updateNewDto: NewDto) {
    let imageData;
    const updateData: Record<string, any> = {};
    if (image) {
      imageData = Buffer.from(image.buffer).toString('base64');
    }
    if (updateNewDto.name) {
      updateData.name = updateNewDto.name.trim();
    }

    if (updateNewDto.description) {
      updateData.description = updateNewDto.description.trim();
    }

    if (imageData || image) {
      updateData.image = `data:image/png;base64,${imageData}`;
    }

    return await this.prisma.informationNew.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: string) {
    return this.prisma.informationNew.delete({ where: { id } });
  }
}
