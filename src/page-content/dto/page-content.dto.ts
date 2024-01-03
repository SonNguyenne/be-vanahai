import { ApiProperty } from "@nestjs/swagger";

export class PageContentDto{
    @ApiProperty({uniqueItems:true})
    slug: string;
    
    @ApiProperty({})
    content: string;
    
    @ApiProperty({})
    page: string;
}