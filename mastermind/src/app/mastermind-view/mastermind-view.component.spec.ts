import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastermindViewComponent } from './mastermind-view.component';

describe('MastermindViewComponent', () => {
  let component: MastermindViewComponent;
  let fixture: ComponentFixture<MastermindViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastermindViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastermindViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
