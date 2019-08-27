import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsTemplateComponent } from './questions-template.component';

describe('QuestionsTemplateComponent', () => {
  let component: QuestionsTemplateComponent;
  let fixture: ComponentFixture<QuestionsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
