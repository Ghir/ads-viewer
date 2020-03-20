import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs/operators';
import { CampaignInfo } from '../interfaces/interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  campaigns: CampaignInfo[];

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.apiService.listCampaigns().pipe(
      take(1),
      tap((campaigns: CampaignInfo[]) => this.campaigns = campaigns)
    ).subscribe();
  }

  navigate(id: number, name: string): void {
    this.router.navigate(['campaign', id], { queryParams: { name } });
  }
}
