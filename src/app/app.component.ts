import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { datos } from './data/tarjetas-servicios';
import { TarjetaComponent } from "./tarjeta/tarjeta.component";
import { ListadoTarjetaComponent } from './listado-tarjeta/listado-tarjeta.component';
import { TarjetaServiciosComponent } from "./tarjeta-servicios/tarjeta-servicios.component";
import { ITarjetaServicios } from './types/ITarjetaServicios';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListadoTarjetaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Aplicacion de angular';
  descripcion = 'Algun valor para la descripcion';
  datosTarjetasServicios: ITarjetaServicios[] = datos
}
