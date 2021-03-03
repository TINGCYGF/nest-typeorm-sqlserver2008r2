import { Test, TestingModule } from '@nestjs/testing';
import { Apiv1Controller } from './apiv1.controller';

describe('Apiv1Controller', () => {
  let controller: Apiv1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Apiv1Controller],
    }).compile();

    controller = module.get<Apiv1Controller>(Apiv1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
