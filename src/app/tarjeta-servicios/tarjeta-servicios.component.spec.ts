import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaServiciosComponent } from './tarjeta-servicios.component';

describe('TarjetaServiciosComponent', () => {
  let component: TarjetaServiciosComponent;
  let fixture: ComponentFixture<TarjetaServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaServiciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarjetaServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
