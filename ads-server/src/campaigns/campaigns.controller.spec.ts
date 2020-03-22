import { Test, TestingModule } from '@nestjs/testing';
import { CampaignsController } from './campaigns.controller';
import { CampaignsService } from './campaigns.service';
import { campaignsMock } from './mocks/campaignsMock';
import { CampaignsServiceMock } from './mocks/campaignsMock.service';
import { platformsMock } from './mocks/platformsMock';

describe('Campaigns Controller', () => {
  let controller: CampaignsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampaignsController],
      providers: [{ provide: CampaignsService, useClass: CampaignsServiceMock }]
    }).compile();

    controller = module.get<CampaignsController>(CampaignsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return campaigns list', async () => {
    expect(await controller.findAll()).toBe(campaignsMock);
  });

  it('should return platform', async () => {
    expect(await controller.findPlatforms('test')).toBe(platformsMock);
  });
});
