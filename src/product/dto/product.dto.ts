import { ApiProperty } from "@nestjs/swagger";

export class ProductDto{
    @ApiProperty({})
    name: string;
    
}