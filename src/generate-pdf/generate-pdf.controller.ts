import { Controller, Get, Post, Res } from '@nestjs/common';
import { GeneratePdfService } from './generate-pdf.service';
import { response, Response } from 'express';

@Controller('generate-pdf')
export class GeneratePdfController {
  constructor(private readonly generatePdfService: GeneratePdfService) {}

  @Post()
  create(@Res() res: Response) {
    return this.generatePdfService.create();
  }

  @Get()
  async render(@Res() res: Response) {
    const payload = {
      firsName: ' Juan',
      lastName: 'Carlos',
      region: 'Meknes',
      datePV: '2012/02/12',
      companie: 'Meknes',
      center: 'Rabat',
    };

    const pdfBuffer = await this.generatePdfService.generate(
      payload,
      'template.odt',
      'docx',
    );

    res.setHeader('Content-Type', 'application/pdf');
    // res.setHeader('Content-Disposition', 'attachment; filename=output.pdf');
    res.send(pdfBuffer);

    return payload;
  }
}
