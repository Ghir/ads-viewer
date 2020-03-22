import { CampaignInfo, Platforms } from "../interfaces/interfaces"
import { campaignsMock } from "./campaignsMock"
import { platformsMock } from "./platformsMock"

export class CampaignsServiceMock {
  listCampaigns(): Promise<CampaignInfo[]> {
    return Promise.resolve(campaignsMock)
  }
  getCampaignPlatforms(): Promise<Platforms> {
    return Promise.resolve(platformsMock)
  }
}