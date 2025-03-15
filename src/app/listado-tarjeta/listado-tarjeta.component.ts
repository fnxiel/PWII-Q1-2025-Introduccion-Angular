import { Component, Input } from '@angular/core';
import { TarjetaServiciosComponent } from "../tarjeta-servicios/tarjeta-servicios.component";
import { IListadoTarjetas } from '../types/IListadoTarjetas';
import { ITarjetaServicios } from '../types/ITarjetaServicios';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-listado-tarjeta',
  standalone: true,
  imports: [TarjetaServiciosComponent, NgFor, NgIf],
  templateUrl: './listado-tarjeta.component.html',
  styleUrl: './listado-tarjeta.component.scss'
})
export class ListadoTarjetaComponent implements IListadoTarjetas {
  @Input() titulo: string = '';
  @Input() tarjetas: ITarjetaServicios[] = [];
  constructor(){

  }
}
