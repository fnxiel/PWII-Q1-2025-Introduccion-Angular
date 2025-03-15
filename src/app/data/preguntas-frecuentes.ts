import { ITarjeta } from "../types/ITarjeta"
import { ITarjetaServicios } from "../types/ITarjetaServicios";

export interface IPreguntaFrecuente{
    id: number
    pregunta: string
    respuesta: string
}

export const preguntasFrecuentes: IPreguntaFrecuente[] = [
    {
        id: 1,
        pregunta: "Mi perro puede comer chocolate?",
        respuesta: "No"
    },
    {
        id: 2,
        pregunta: "Mi gato come ratones?",
        respuesta: "No, solo los caza."
    },
];