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
import { ApiTags } from '@nestjs/swagger';
import { PageContentDto } from './dto/page-content.dto';

@ApiTags('page-content')
@Controller('page-content')
export class PageContentController {
  constructor(private readonly pageContentService: PageContentService) {}

  @Post()
  create(@Body() createPageContentDto: PageContentDto) {
    return this.pageContentService.create(createPageContentDto);
  }

  @Get()
  findAll() {
    return this.pageContentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pageContentService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePageContentDto: PageContentDto,
  ) {
    return this.pageContentService.update(id, updatePageContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pageContentService.remove(id);
  }
}
