import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignsController } from './campaigns.controller';
import { CampaignsService } from './campaigns.service';
import { CampaignsSchema } from './schemas/campaigns.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Campaigns', schema: CampaignsSchema }])],
  controllers: [CampaignsController],
  providers: [CampaignsService],
})
export class CampaignsModule { }
