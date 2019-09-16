import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicespageComponent } from './servicespage.component';

describe('ServicespageComponent', () => {
  let component: ServicespageComponent;
  let fixture: ComponentFixture<ServicespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
