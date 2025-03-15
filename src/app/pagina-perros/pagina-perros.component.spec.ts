import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPerrosComponent } from './pagina-perros.component';

describe('PaginaPerrosComponent', () => {
  let component: PaginaPerrosComponent;
  let fixture: ComponentFixture<PaginaPerrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPerrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaPerrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
