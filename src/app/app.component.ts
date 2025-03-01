import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaComponent } from "./tarjeta/tarjeta.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TarjetaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Aplicacion de angular';
  descripcion = 'Algun valor para la descripcion';
}
