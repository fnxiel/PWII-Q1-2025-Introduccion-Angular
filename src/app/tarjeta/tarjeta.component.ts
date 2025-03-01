import { Component } from '@angular/core';
import { IEnlace } from '../types/IEnlace';
import { ITarjeta } from '../types/ITarjeta';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.scss'
})
export class TarjetaComponent implements ITarjeta {
  titulo: string = 'Titulo de la tarjeta';
  descripcion: string = 'Una descripcion de lo que esta mostrando la tarjeta';
  enlace: IEnlace = {
    href: 'https://www.google.com',
    texto: 'Enlace a google'
  };

}
