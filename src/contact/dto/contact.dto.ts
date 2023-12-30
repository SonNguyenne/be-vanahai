import { ApiProperty } from "@nestjs/swagger";

export class ContactDto {
    @ApiProperty({uniqueItems:true})
    name: string;
    
    @ApiProperty({})
    email: string;
    
    @ApiProperty({})
    subject: string;
    
    @ApiProperty({})
    message: string;
}
