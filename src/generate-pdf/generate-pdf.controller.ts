import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
  Res,
} from '@nestjs/common';
import { GeneratePdfService } from './generate-pdf.service';
import { Response } from 'express';

@Controller('generate-pdf')
export class GeneratePdfController {
  constructor(private readonly generatePdfService: GeneratePdfService) {}

  // @Post()
  // create(@Res() res: Response) {
  //   return this.generatePdfService.create();
  // }

  @Post()
  async render(@Body() body, @Res() res: Response) {
    // const payload = {
    //   region: 'بطنجة',
    //   compagnie: 'طنجة',
    //   centre: 'القضائي بطنجة',
    //   numero_pv: 12345,
    //   date_pv: '2025-02-07',
    //   nom_personne_impliquee: 'مراد الصروخ',
    //   nom_officier_premier: 'عبدالرحيم أوموي',
    //   grade_officier_premier: 'رقيب',
    //   statut_officier_premier: '(ض.ش.ق)',
    //   nom_officier_deuxieme: 'خالد بوماي',
    //   grade_officier_deuxieme: 'رقيب أول',
    //   statut_officier_deuxieme: '(ع.ش.ق)',
    //   accusation: 'محاولة الهجرة غير المشروع',
    //   article_code: '20 إلى 26 و 78',
    //   article_loi: 'المسطرة الجنائية',
    // };

    try {
      const pdfBuffer = await this.generatePdfService.generate(
        body,
        'template.odt',
        'pdf',
      );

      res.setHeader('Content-Type', 'application/pdf');
      // res.setHeader('Content-Disposition', 'attachment; filename=output.pdf');
      res.send(pdfBuffer);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
