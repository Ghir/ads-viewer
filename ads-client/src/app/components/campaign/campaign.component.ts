import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { Platforms } from '../../interfaces/interfaces';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
})
export class CampaignComponent implements OnInit {

  campaignName: Observable<string>;
  platformNames: Observable<string[]>;
  platforms: Platforms;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.campaignName = this.route.queryParams.pipe(
      map((params: Params) => params.name)
    );

    this.platformNames = this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.apiService.getCampaignPlatforms(params.id);
        }),
        tap((platforms: Platforms) => this.platforms = platforms),
        map((platforms: Platforms) => Object.keys(platforms))
      );
  }
}
