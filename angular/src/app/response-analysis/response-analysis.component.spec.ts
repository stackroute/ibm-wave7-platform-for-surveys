import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseAnalysisComponent } from './response-analysis.component';

describe('ResponseAnalysisComponent', () => {
  let component: ResponseAnalysisComponent;
  let fixture: ComponentFixture<ResponseAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
