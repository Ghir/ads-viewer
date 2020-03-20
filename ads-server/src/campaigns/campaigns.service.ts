import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import data from 'data';
import { Model } from 'mongoose';
import { Campaign, CampaignInfo, Platforms } from './interfaces/interfaces';

@Injectable()
export class CampaignsService {
  constructor(@InjectModel('Campaigns') private campaignsModel: Model<Campaign>) {
    this.resetData();
  }

  async listCampaigns(): Promise<CampaignInfo[]> {
    let campaigns: CampaignInfo[];
    try {
      const data = await this.campaignsModel.find().exec();
      campaigns = data.map((campaign: Campaign) => {
        const totalRemaining = Object.keys(campaign.platforms).reduce((acc, curr) => {
          return acc += campaign.platforms[curr].remaining_budget;
        }, 0);
        const budget = Math.round(100 - totalRemaining / campaign.total_budget * 100);
        const { id, name, goal, status } = campaign;
        return {
          id,
          name,
          goal,
          status,
          budget
        };
      });
    } catch (error) {
      console.error(error);
    }

    return campaigns;
  }

  async getCampaignPlatforms(id: string): Promise<Platforms> {
    let campaign: Campaign;
    try {
      campaign = await this.campaignsModel.findOne({ id }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find campaign.');
    }
    if (!campaign) {
      throw new NotFoundException('Could not find campaign.');
    }

    return campaign.platforms;
  }

  private async resetData(): Promise<void> {
    try {
      await this.campaignsModel.deleteMany({});
      await this.campaignsModel.insertMany(data);
    } catch (error) {
      console.error(error);
    }
  }
}