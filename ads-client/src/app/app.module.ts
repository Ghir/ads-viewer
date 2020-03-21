import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ApiService } from './services/api.service';
import { CampaignComponent } from './components/campaign/campaign.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { PlatformComponent } from './components/platform/platform.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormatPipe } from './pipes/format.pipe';
import { SpacedPipe } from './pipes/spaced.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CampaignComponent,
    PlatformComponent,
    FormatPipe,
    SpacedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatProgressBarModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
