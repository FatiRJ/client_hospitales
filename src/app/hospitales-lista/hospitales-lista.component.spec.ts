import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalesListaComponent } from './hospitales-lista.component';

describe('HospitalesListaComponent', () => {
  let component: HospitalesListaComponent;
  let fixture: ComponentFixture<HospitalesListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalesListaComponent]
    });
    fixture = TestBed.createComponent(HospitalesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
