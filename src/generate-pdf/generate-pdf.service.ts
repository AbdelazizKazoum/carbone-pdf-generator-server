import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as util from 'util';
import * as carbone from 'carbone';
import { join } from 'path';

@Injectable()
export class GeneratePdfService {
  create() {
    const payload = {
      firsName: ' Juan',
      lastName: 'Carlos',
    };

    return payload;
  }

  async generate<T>(
    data: T,
    nameTemplate: string,
    convertTo: string = 'pdf',
  ): Promise<Buffer> {
    try {
      const option = {
        convertTo,
      };
      const renderCarbone = util.promisify(carbone.render) as (
        template: string,
        data: T,
        option: object,
      ) => Promise<Buffer>;

      const templatePath = `src/templates/${nameTemplate}`;

      return await renderCarbone(
        join(process.cwd(), templatePath),
        data,
        option,
      );
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} generatePdf`;
  }
}
