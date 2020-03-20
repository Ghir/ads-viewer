import { Component, Input } from '@angular/core';
import { Platform } from './../interfaces/interfaces';
import { API } from '../services/api.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent {

  api = API;

  @Input() platform: Platform;

  constructor() { }

  get audienceFields(): string[] {
    return Object.keys(this.platform.target_audience);
  }

  get insightsFields(): string[] {
    return Object.keys(this.platform.insights);
  }

  get creativesFields(): string[] {
    return Object.keys(this.platform.creatives).filter((field: string) => field !== 'image');
  }

  get budget(): number {
    return Math.round(100 - this.platform.remaining_budget / this.platform.total_budget * 100);
  }
}
