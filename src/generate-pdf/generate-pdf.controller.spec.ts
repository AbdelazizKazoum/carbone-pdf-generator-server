import { Test, TestingModule } from '@nestjs/testing';
import { GeneratePdfController } from './generate-pdf.controller';
import { GeneratePdfService } from './generate-pdf.service';

describe('GeneratePdfController', () => {
  let controller: GeneratePdfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneratePdfController],
      providers: [GeneratePdfService],
    }).compile();

    controller = module.get<GeneratePdfController>(GeneratePdfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
