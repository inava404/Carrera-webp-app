import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasesPromocionScreenComponent } from './bases-promocion-screen.component';

describe('BasesPromocionScreenComponent', () => {
  let component: BasesPromocionScreenComponent;
  let fixture: ComponentFixture<BasesPromocionScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasesPromocionScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasesPromocionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});