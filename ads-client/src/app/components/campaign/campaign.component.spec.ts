import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import activatedRouteMock from 'src/mocks/activatedRouteMock';
import ApiMockService from 'src/mocks/apiMock.service';
import { PlatformComponent } from '../platform/platform.component';
import { FormatPipe } from './../../pipes/format.pipe';
import { SpacedPipe } from './../../pipes/spaced.pipe';
import { CampaignComponent } from './campaign.component';

describe('CampaignComponent', () => {
  let component: CampaignComponent;
  let fixture: ComponentFixture<CampaignComponent>;
  let apiService: ApiService;
  let apiSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTabsModule,
        MatCardModule,
        MatProgressBarModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        CampaignComponent,
        PlatformComponent,
        FormatPipe,
        SpacedPipe,
      ],
      providers: [
        {
          provide: ApiService,
          useClass: ApiMockService
        },
        {
          provide: ActivatedRoute,
          useValue: activatedRouteMock,
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    apiSpy = spyOn(apiService, 'getCampaignPlatforms').and.callThrough();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the right campaign name', () => {
    const name = fixture.debugElement.query(By.css('.title')).nativeElement.textContent;

    expect(name).toBe('Test Campaign');
  });

  it('should call the api to get platforms', () => {
    expect(apiSpy).toHaveBeenCalled();
  });
});
