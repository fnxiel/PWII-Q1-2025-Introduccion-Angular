import { Component, Input } from '@angular/core';
import { ITarjetaServicios } from '../types/ITarjetaServicios';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarjeta-servicios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tarjeta-servicios.component.html',
  styleUrl: './tarjeta-servicios.component.scss'
})
export class TarjetaServiciosComponent implements ITarjetaServicios {
  @Input() href: string = '';
  @Input() icono:string = '';
  @Input() texto:string = '';
}
