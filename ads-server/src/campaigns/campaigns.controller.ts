import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { CampaignsService } from './campaigns.service';
import { CampaignInfo, Platforms } from './interfaces/interfaces';

@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) { }

  @Get()
  findAll(): Promise<CampaignInfo[]> {
    return this.campaignsService.listCampaigns();
  }

  @Get(':id')
  findPlatforms(@Param('id') id: string): Promise<Platforms> {
    return this.campaignsService.getCampaignPlatforms(id);
  }

  @Get('img/:uri')
  getImage(@Param('uri') uri: string, @Res() res: Response): void {
    return res.sendFile(uri, { root: 'public' });
  }
}
