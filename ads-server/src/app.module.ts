import { CampaignsModule } from './campaigns/campaigns.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo/ads'),
    CampaignsModule
  ]
})
export class AppModule { }
