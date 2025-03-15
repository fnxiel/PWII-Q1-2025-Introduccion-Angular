import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPreguntasFrecuentesComponent } from './pagina-preguntas-frecuentes.component';

describe('PaginaPreguntasFrecuentesComponent', () => {
  let component: PaginaPreguntasFrecuentesComponent;
  let fixture: ComponentFixture<PaginaPreguntasFrecuentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPreguntasFrecuentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaPreguntasFrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
