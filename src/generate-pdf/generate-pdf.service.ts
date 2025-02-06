import { Injectable } from '@nestjs/common';
import { CreateGeneratePdfDto } from './dto/create-generate-pdf.dto';
import { UpdateGeneratePdfDto } from './dto/update-generate-pdf.dto';

@Injectable()
export class GeneratePdfService {
  create(createGeneratePdfDto: CreateGeneratePdfDto) {
    return 'This action adds a new generatePdf';
  }

  findAll() {
    return `This action returns all generatePdf`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generatePdf`;
  }

  update(id: number, updateGeneratePdfDto: UpdateGeneratePdfDto) {
    return `This action updates a #${id} generatePdf`;
  }

  remove(id: number) {
    return `This action removes a #${id} generatePdf`;
  }
}
