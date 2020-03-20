import { CampaignInfo } from '../interfaces/interfaces';
import { Observable, of } from 'rxjs';
import { campaignsMock } from 'src/mocks/campaigns';

export default class ApiMockService {
  listCampaigns(): Observable<CampaignInfo[]> {
    return of(campaignsMock);
  }
}