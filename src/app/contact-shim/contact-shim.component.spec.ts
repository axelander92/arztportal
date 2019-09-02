import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactShimComponent } from './contact-shim.component';

describe('ContactShimComponent', () => {
  let component: ContactShimComponent;
  let fixture: ComponentFixture<ContactShimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactShimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactShimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
