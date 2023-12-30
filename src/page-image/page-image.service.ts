import { Injectable } from '@nestjs/common';
import { CreatePageImageDto } from './dto/create-page-image.dto';
import { UpdatePageImageDto } from './dto/update-page-image.dto';

@Injectable()
export class PageImageService {
  create(createPageImageDto: CreatePageImageDto) {
    return 'This action adds a new pageImage';
  }

  findAll() {
    return `This action returns all pageImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pageImage`;
  }

  update(id: number, updatePageImageDto: UpdatePageImageDto) {
    return `This action updates a #${id} pageImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} pageImage`;
  }
}
