import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { PageImageService } from './page-image.service';
import { ApiTags } from '@nestjs/swagger';
import { PageImageDto } from './dto/page-image.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('page-image')
@Controller('page-image')
export class PageImageController {
  constructor(private readonly pageImageService: PageImageService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(
    @UploadedFile() image: Express.Multer.File,
    @Body() createPageImageDto: PageImageDto,
  ) {
    return this.pageImageService.create(image, createPageImageDto);
  }

  @Get()
  findAll() {
    return this.pageImageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pageImageService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('image'))
  update(
    @Param('id') id: string,
    @UploadedFile() image: Express.Multer.File,
    @Body() updatePageImageDto: PageImageDto,
  ) {
    return this.pageImageService.update(id, image, updatePageImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pageImageService.remove(id);
  }
}
