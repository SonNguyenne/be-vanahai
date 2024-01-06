import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductDto } from './dto/product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  async create(image: Express.Multer.File, createProductDto: ProductDto) {
    if (!image) throw new BadRequestException('Image cannot be empty');
    if (!createProductDto.categoryId)
      throw new BadRequestException('Category cannot be empty');

    const imageBuffer = image.buffer;
    const imageData = Buffer.from(imageBuffer).toString('base64');
    try {
      return await this.prisma.product.create({
        data: {
          name: createProductDto.name.trim(),
          price: Number(createProductDto.price),
          isBestSeller: /true/.test(createProductDto.isBestSeller.toString()),
          isDiscount: /true/.test(createProductDto.isDiscount.toString()),
          discountPrice: Number(createProductDto?.discountPrice),
          categoryId: createProductDto.categoryId.trim(),
          image: `data:image/png;base64,${imageData}`,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.product.findUnique({ where: { id } });
  }

  async update(
    id: string,
    image: Express.Multer.File,
    updateProductDto: ProductDto,
  ) {
    let imageData;
    const updateData: Record<string, any> = {};
    if (image) {
      imageData = Buffer.from(image.buffer).toString('base64');
    }
    if (updateProductDto.name) {
      updateData.name = updateProductDto.name.trim();
    }

    if (updateProductDto.price) {
      updateData.price = Number(updateProductDto.price);
    }

    if (imageData || image) {
      updateData.image = `data:image/png;base64,${imageData}`;
    }

    if (updateProductDto.isBestSeller !== undefined) {
      updateData.isBestSeller = /true/.test(
        updateProductDto.isBestSeller.toString(),
      );
    }

    if (updateProductDto.isDiscount !== undefined) {
      updateData.isDiscount = /true/.test(
        updateProductDto.isDiscount.toString(),
      );
    }

    if (updateProductDto.discountPrice) {
      updateData.discountPrice = Number(updateProductDto.discountPrice);
    }

    if (updateProductDto.categoryId) {
      updateData.categoryId = updateProductDto.categoryId.trim();
    }
    return await this.prisma.product.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }
}
