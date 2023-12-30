import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PageImageService } from './page-image.service';
import { CreatePageImageDto } from './dto/create-page-image.dto';
import { UpdatePageImageDto } from './dto/update-page-image.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('page-image')
@Controller('page-image')
export class PageImageController {
  constructor(private readonly pageImageService: PageImageService) {}

  @Post()
  create(@Body() createPageImageDto: CreatePageImageDto) {
    return this.pageImageService.create(createPageImageDto);
  }

  @Get()
  findAll() {
    return this.pageImageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pageImageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePageImageDto: UpdatePageImageDto) {
    return this.pageImageService.update(+id, updatePageImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pageImageService.remove(+id);
  }
}
