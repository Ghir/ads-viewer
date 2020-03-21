import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignComponent } from './components/campaign/campaign.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'campaign/:id',
    component: CampaignComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
