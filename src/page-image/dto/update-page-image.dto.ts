import { PartialType } from '@nestjs/swagger';
import { CreatePageImageDto } from './create-page-image.dto';

export class UpdatePageImageDto extends PartialType(CreatePageImageDto) {}
