import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { campaignsMock } from 'src/mocks/campaigns';
import ApiMockService from '../services/api-mock.service';
import { ApiService } from '../services/api.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: ApiService, useClass: ApiMockService }],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the correct number of campaigns', () => {
    component.campaigns = of(campaignsMock);
    const campaigns = fixture.debugElement.queryAll(By.css('.card'));

    expect(campaigns.length).toBeTruthy();
  });
});
