import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheaterInfoComponent } from './wheater-info.component';

describe('WheaterInfoComponent', () => {
  let component: WheaterInfoComponent;
  let fixture: ComponentFixture<WheaterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheaterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheaterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
