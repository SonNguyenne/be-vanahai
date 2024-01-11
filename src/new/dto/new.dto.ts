import { ApiProperty } from '@nestjs/swagger';

export class NewDto {
  @ApiProperty({})
  name: string;

  @ApiProperty({})
  image: string;

  @ApiProperty({})
  description?: string;
}
