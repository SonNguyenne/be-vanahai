import { ApiProperty } from "@nestjs/swagger";

export class PageImageDto{
    @ApiProperty({})
    slug: string;
    
    @ApiProperty({})
    image: string;
    
    @ApiProperty({})
    page: string;
}