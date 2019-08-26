import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySurveyCardComponent } from './my-survey-card.component';

describe('MySurveyCardComponent', () => {
  let component: MySurveyCardComponent;
  let fixture: ComponentFixture<MySurveyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySurveyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySurveyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
