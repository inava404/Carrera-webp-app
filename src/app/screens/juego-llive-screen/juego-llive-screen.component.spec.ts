import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoLliveScreenComponent } from './juego-llive-screen.component';

describe('JuegoLliveScreenComponent', () => {
  let component: JuegoLliveScreenComponent;
  let fixture: ComponentFixture<JuegoLliveScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuegoLliveScreenComponent]
    });
    fixture = TestBed.createComponent(JuegoLliveScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
