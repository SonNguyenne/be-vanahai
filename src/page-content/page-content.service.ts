import { Injectable } from '@nestjs/common';
import { CreatePageContentDto } from './dto/create-page-content.dto';
import { UpdatePageContentDto } from './dto/update-page-content.dto';

@Injectable()
export class PageContentService {
  create(createPageContentDto: CreatePageContentDto) {
    return 'This action adds a new pageContent';
  }

  findAll() {
    return `This action returns all pageContent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pageContent`;
  }

  update(id: number, updatePageContentDto: UpdatePageContentDto) {
    return `This action updates a #${id} pageContent`;
  }

  remove(id: number) {
    return `This action removes a #${id} pageContent`;
  }
}
