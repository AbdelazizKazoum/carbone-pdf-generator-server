import { Injectable } from '@nestjs/common';

@Injectable()
export class GeneratePdfService {
  create() {
    const payload = {
      firsName: ' Juan',
      lastName: 'Carlos',
    };

    return payload;
  }

  findAll() {
    const payload = {
      firsName: ' Juan',
      lastName: 'Carlos',
    };

    return payload;
  }

  findOne(id: number) {
    return `This action returns a #${id} generatePdf`;
  }
}
