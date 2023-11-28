import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaScreenComponent } from './politica-screen.component';

describe('PoliticaScreenComponent', () => {
  let component: PoliticaScreenComponent;
  let fixture: ComponentFixture<PoliticaScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticaScreenComponent]
    });
    fixture = TestBed.createComponent(PoliticaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
