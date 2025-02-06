import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GeneratePdfService } from './generate-pdf.service';
import { CreateGeneratePdfDto } from './dto/create-generate-pdf.dto';
import { UpdateGeneratePdfDto } from './dto/update-generate-pdf.dto';

@Controller('generate-pdf')
export class GeneratePdfController {
  constructor(private readonly generatePdfService: GeneratePdfService) {}

  @Post()
  create(@Body() createGeneratePdfDto: CreateGeneratePdfDto) {
    return this.generatePdfService.create(createGeneratePdfDto);
  }

  @Get()
  findAll() {
    return this.generatePdfService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generatePdfService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeneratePdfDto: UpdateGeneratePdfDto) {
    return this.generatePdfService.update(+id, updateGeneratePdfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generatePdfService.remove(+id);
  }
}
