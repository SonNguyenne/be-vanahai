import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/category/entities/category.entity';

export class ProductDto {
  @ApiProperty({})
  name: string;

  @ApiProperty({})
  price: number;

  @ApiProperty({})
  image: string;

  @ApiProperty({})
  isBestSeller?: boolean;

  @ApiProperty({})
  isDiscount?: boolean;

  @ApiProperty({})
  discountPrice?: number;

  @ApiProperty({})
  categoryId: string;

  @ApiProperty({})
  Category?: {
    connect: {
      id: string;
    };
  };
}
