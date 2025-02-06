import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as util from 'util';
import * as carbone from 'carbone';

@Injectable()
export class GeneratePdfService {
  create() {
    const payload = {
      firsName: ' Juan',
      lastName: 'Carlos',
    };

    return payload;
  }

  findAll<T>(data: T, templateNamle: string, convertTo) {
    try {
      const option = {
        convertTo: 'pdf',
      };
      const renderCarbone = util.promisify(carbone.render) as (
        template: string,
        data: T,
        option: object,
      ) => Promise<Buffer>;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    return payload;
  }

  findOne(id: number) {
    return `This action returns a #${id} generatePdf`;
  }
}
