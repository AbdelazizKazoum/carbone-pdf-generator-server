import { Controller, Get, Post, Res } from '@nestjs/common';
import { GeneratePdfService } from './generate-pdf.service';
import { Response } from 'express';

@Controller('generate-pdf')
export class GeneratePdfController {
  constructor(private readonly generatePdfService: GeneratePdfService) {}

  @Post()
  create(@Res() res: Response) {
    return this.generatePdfService.create();
  }

  @Get()
  findAll() {
    const payload = {
      firsName: ' Juan',
      lastName: 'Carlos',
    };

    return this.generatePdfService.generate(payload);
  }
}
