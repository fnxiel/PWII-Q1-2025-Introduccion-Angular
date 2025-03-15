import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAccesoriosComponent } from './pagina-accesorios.component';

describe('PaginaAccesoriosComponent', () => {
  let component: PaginaAccesoriosComponent;
  let fixture: ComponentFixture<PaginaAccesoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaAccesoriosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaAccesoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
