import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankingDialogBoxComponent } from './thanking-dialog-box.component';

describe('ThankingDialogBoxComponent', () => {
  let component: ThankingDialogBoxComponent;
  let fixture: ComponentFixture<ThankingDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankingDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankingDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
