import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedviewComponent } from './publishedview.component';

describe('PublishedviewComponent', () => {
  let component: PublishedviewComponent;
  let fixture: ComponentFixture<PublishedviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishedviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
