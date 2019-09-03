import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttainComponent } from './attain.component';

describe('AttainComponent', () => {
  let component: AttainComponent;
  let fixture: ComponentFixture<AttainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
