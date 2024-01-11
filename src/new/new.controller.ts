import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { NewService } from './new.service';
import { CreateNewDto } from './dto/create-new.dto';
import { UpdateNewDto } from './dto/update-new.dto';
import { ApiTags } from '@nestjs/swagger';
import { NewDto } from './dto/new.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('new')
@Controller('new')
export class NewController {
  constructor(private readonly newService: NewService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(
    @UploadedFile() image: Express.Multer.File,
    @Body() createNewDto: NewDto,
  ) {
    return this.newService.create(image, createNewDto);
  }

  @Get()
  findAll() {
    return this.newService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newService.findOne(id);
  }

  @UseInterceptors(FileInterceptor('image'))
  @Patch(':id')
  update(
    @UploadedFile() image: Express.Multer.File,
    @Param('id') id: string,
    @Body() updateNewDto: NewDto,
  ) {
    return this.newService.update(id, image, updateNewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newService.remove(id);
  }
}
