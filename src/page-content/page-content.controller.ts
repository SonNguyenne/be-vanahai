import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PageContentService } from './page-content.service';
import { CreatePageContentDto } from './dto/create-page-content.dto';
import { UpdatePageContentDto } from './dto/update-page-content.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('page-content')
@Controller('page-content')
export class PageContentController {
  constructor(private readonly pageContentService: PageContentService) {}

  @Post()
  create(@Body() createPageContentDto: CreatePageContentDto) {
    return this.pageContentService.create(createPageContentDto);
  }

  @Get()
  findAll() {
    return this.pageContentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pageContentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePageContentDto: UpdatePageContentDto,
  ) {
    return this.pageContentService.update(+id, updatePageContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pageContentService.remove(+id);
  }
}
