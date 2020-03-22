import { SpacedPipe } from './../../pipes/spaced.pipe';
import { FormatPipe } from './../../pipes/format.pipe';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformComponent } from './platform.component';
import { By } from '@angular/platform-browser';
import { platformsMock } from 'src/mocks/platformsMock';

describe('PlatformComponent', () => {
  let component: PlatformComponent;
  let fixture: ComponentFixture<PlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatProgressBarModule,
      ],
      declarations: [
        PlatformComponent,
        FormatPipe,
        SpacedPipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformComponent);
    component = fixture.componentInstance;
    component.platform = platformsMock.facebook;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the correct number of sections', () => {
    const cards = fixture.debugElement.queryAll(By.css('.card'));

    expect(cards.length).toBe(4);
  });
});
