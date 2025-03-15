import { Component, Input } from '@angular/core';
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
  @Input() titulo: string = 'Titulo de la tarjeta';
  @Input() descripcion: string = 'Una descripcion de lo que esta mostrando la tarjeta';
  @Input() enlace: IEnlace = {
    href: 'https://www.google.com',
    texto: 'Enlace a google'
  };
  contador: number = 0
  seguidores: number = 0

  contar(){
    this.contador++
  }

  contarSeguidores(accion: "Seguir" | "Dejar de Seguir"){
    if(accion === "Seguir"){
      console.log("Siguendo")
      this.seguidores++
    }else{
      console.log("Dejar de seguir")
      this.seguidores--
    }
  }

}
