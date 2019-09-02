import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCanvasComponent } from './basic-canvas.component';

describe('BasicCanvasComponent', () => {
  let component: BasicCanvasComponent;
  let fixture: ComponentFixture<BasicCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
