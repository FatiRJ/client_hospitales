import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentosListaComponent } from './departamentos-lista.component';

describe('DepartamentosListaComponent', () => {
  let component: DepartamentosListaComponent;
  let fixture: ComponentFixture<DepartamentosListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartamentosListaComponent]
    });
    fixture = TestBed.createComponent(DepartamentosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
