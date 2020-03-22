import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { campaignsMock } from 'src/mocks/campaignsMock';
import ApiMockService from '../../../mocks/apiMock.service';
import { ApiService } from '../../services/api.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let apiService: ApiService;
  let apiSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: ApiService, useClass: ApiMockService }],
      imports: [
        RouterTestingModule,
        MatCardModule,
        MatProgressBarModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    apiSpy = spyOn(apiService, 'listCampaigns').and.callThrough();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the api to get campaigns', () => {
    expect(apiSpy).toHaveBeenCalled();
  });

  it('should show the correct number of campaigns', () => {
    component.campaigns = campaignsMock;
    const campaigns = fixture.debugElement.queryAll(By.css('.card'));

    expect(campaigns.length).toBeTruthy();
  });
});
