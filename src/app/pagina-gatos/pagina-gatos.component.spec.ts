import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGatosComponent } from './pagina-gatos.component';

describe('PaginaGatosComponent', () => {
  let component: PaginaGatosComponent;
  let fixture: ComponentFixture<PaginaGatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaGatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaGatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
