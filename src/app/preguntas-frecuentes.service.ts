import { Injectable } from '@angular/core';
import { IPreguntaFrecuente, preguntasFrecuentes } from './data/preguntas-frecuentes';

@Injectable({
  providedIn: 'root'
})
export class PreguntasFrecuentesService {
  preguntasFrecuentes: IPreguntaFrecuente[] = preguntasFrecuentes
  constructor() { }

  leerPreguntaFrecuente(id: number): IPreguntaFrecuente | undefined{
    return this.preguntasFrecuentes.find(pregunta => pregunta.id === id)
  }

  agregarPreguntaFrecuente(nuevaPreguntaFrecuente: IPreguntaFrecuente){
    this.preguntasFrecuentes.push(nuevaPreguntaFrecuente)
  }
}
