import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CampaignsService } from './campaigns.service';
import { campaignsMock } from './mocks/campaignsMock';
import { CampaignsModelMock } from './mocks/campaignsModelMock';
import { platformsMock } from './mocks/platformsMock';

describe('CampaignsService', () => {
  let service: CampaignsService;

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CampaignsService,
        {
          provide: getModelToken('Campaigns'),
          useClass: CampaignsModelMock,
        }]
    }).compile();

    service = module.get<CampaignsService>(CampaignsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should list campaigns', async () => {
    const campaigns = await service.listCampaigns()

    expect(campaigns).toStrictEqual(campaignsMock);
  });

  it('should list platforms', async () => {
    const platforms = await service.getCampaignPlatforms('test')

    expect(platforms).toStrictEqual(platformsMock);
  });
});
