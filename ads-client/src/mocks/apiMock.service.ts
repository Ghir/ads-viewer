import { CampaignInfo, Platforms } from '../app/interfaces/interfaces';
import { Observable, of } from 'rxjs';
import { campaignsMock } from 'src/mocks/campaignsMock';
import { platformsMock } from 'src/mocks/platformsMock';

export default class ApiMockService {
  listCampaigns(): Observable<CampaignInfo[]> {
    return of(campaignsMock);
  }

  getCampaignPlatforms(id: number): Observable<Platforms> {
    return of(platformsMock);
  }
}