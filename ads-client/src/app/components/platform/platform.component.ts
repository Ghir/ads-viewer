import { Component, Input } from '@angular/core';
import { Platform } from '../../interfaces/interfaces';
import { API } from '../../services/api.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent {

  api = API;

  @Input() platform: Platform;

  constructor() { }

  get budget(): number {
    return Math.round(100 - this.platform.remaining_budget / this.platform.total_budget * 100);
  }
}
