import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CampaignInfo } from '../interfaces/interfaces';
import { Platforms } from './../interfaces/interfaces';

export const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  listCampaigns(): Observable<CampaignInfo[]> {
    return this.http.get<CampaignInfo[]>(`${API}/campaigns`);
  }

  getCampaignPlatforms(id: number): Observable<Platforms> {
    return this.http.get<Platforms>(`${API}/campaigns/${id}`);
  }
}