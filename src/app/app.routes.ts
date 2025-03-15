import { Routes } from '@angular/router';
import { PaginaMedicinasComponent } from './pagina-medicinas/pagina-medicinas.component';
import { PaginaPerrosComponent } from './pagina-perros/pagina-perros.component';
import { PaginaGatosComponent } from './pagina-gatos/pagina-gatos.component';
import { PaginaAccesoriosComponent } from './pagina-accesorios/pagina-accesorios.component';
import { PaginaComidaComponent } from './pagina-comida/pagina-comida.component';
import { PaginaPreguntasFrecuentesComponent } from './pagina-preguntas-frecuentes/pagina-preguntas-frecuentes.component';

export const routes: Routes = [
    {
        path: 'medicinas',
        component: PaginaMedicinasComponent
    },
    {
        path: 'perros',
        component: PaginaPerrosComponent
    },
    {
        path: 'gatos',
        component: PaginaGatosComponent
    },
    {
        path: 'accesorios',
        component: PaginaAccesoriosComponent
    },
    {
        path: 'comida',
        component: PaginaComidaComponent
    },
    {
        path: 'preguntas-frecuentes',
        component: PaginaPreguntasFrecuentesComponent
    },
];
