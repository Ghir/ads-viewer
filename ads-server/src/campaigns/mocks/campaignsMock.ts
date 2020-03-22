import { CampaignInfo } from "src/campaigns/interfaces/interfaces";

export const campaignsMock: CampaignInfo[] = [
  {
    id: 100000001,
    name: 'Test Ad 1',
    goal: 'Increase Reach',
    status: 'Delivering',
    budget: 58
  },
  {
    id: 100000002,
    name: 'Test Ad 2',
    goal: 'Raise Awareness',
    status: 'Ended',
    budget: 97
  },
  {
    id: 100000003,
    name: 'Test Ad 3',
    goal: 'Raise Awareness',
    status: 'Scheduled',
    budget: 11
  }
]