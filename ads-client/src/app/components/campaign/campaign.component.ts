import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Platforms } from '../../interfaces/interfaces';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
})
export class CampaignComponent implements OnInit {

  campaignName: Observable<string>;
  platforms: Observable<Platforms>;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.campaignName = this.route.queryParams.pipe(
      map((params: Params) => params.name)
    );

    this.platforms = this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.apiService.getCampaignPlatforms(params.id);
        })
      );
  }
}