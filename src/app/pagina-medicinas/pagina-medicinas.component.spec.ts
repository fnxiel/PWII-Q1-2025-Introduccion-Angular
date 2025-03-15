import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMedicinasComponent } from './pagina-medicinas.component';

describe('PaginaMedicinasComponent', () => {
  let component: PaginaMedicinasComponent;
  let fixture: ComponentFixture<PaginaMedicinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaMedicinasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaMedicinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
