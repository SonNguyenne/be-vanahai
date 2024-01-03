import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductDto } from './dto/product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  async create(createProductDto: ProductDto) {
    if (!createProductDto.name)
      throw new BadRequestException('Name cannot be empty');
    if (!createProductDto.price)
      throw new BadRequestException('Price cannot be empty');
    if (!createProductDto.image)
      throw new BadRequestException('Image cannot be empty');
    if (!createProductDto.categoryId)
      throw new BadRequestException('Category cannot be empty');

   try  { 
    return await this.prisma.product.create({
      data: { 
        name: createProductDto.name.trim(),
        price: createProductDto.price, 
        image: createProductDto.image.trim(), 
        isBestSeller: createProductDto.isBestSeller, 
        isDiscount: createProductDto.isDiscount, 
        discountPrice: createProductDto.discountPrice, 
        categoryId: createProductDto.categoryId.trim()
      }
    });
       } catch(err)  {
        console.log(err)
      }
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.product.findUnique({ where: { id } });

  }

  async update(id: string, updateProductDto: ProductDto) {
    return await this.prisma.product.update({
      where: { id },
      data: { 
        name: updateProductDto.name.trim(),
        price: updateProductDto.price, 
        image: updateProductDto.image.trim(), 
        isBestSeller: updateProductDto.isBestSeller, 
        isDiscount: updateProductDto.isDiscount, 
        discountPrice: updateProductDto.discountPrice, 
        categoryId: updateProductDto.categoryId.trim()
      },
    });
  }

  async remove(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }
}
