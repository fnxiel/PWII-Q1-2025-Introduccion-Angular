import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntasFrecuentesService } from '../preguntas-frecuentes.service';
import { IPreguntaFrecuente } from '../data/preguntas-frecuentes';

@Component({
  selector: 'app-pagina-preguntas-frecuentes',
  standalone: true,
  imports: [],
  templateUrl: './pagina-preguntas-frecuentes.component.html',
  styleUrl: './pagina-preguntas-frecuentes.component.scss'
})
export class PaginaPreguntasFrecuentesComponent implements OnInit {
  numeroPregunta: number = 0
  preguntaMostrar?: IPreguntaFrecuente

  constructor(
    private ruta: ActivatedRoute,
    private servicioPreguntasFrecuentes: PreguntasFrecuentesService
  ){}

  ngOnInit(): void {
    this.ruta.queryParams.subscribe(params =>
      this.numeroPregunta = Number(params['numeroPregunta'])
    )
    this.preguntaMostrar = this.servicioPreguntasFrecuentes.leerPreguntaFrecuente(this.numeroPregunta)
  }

  
}
