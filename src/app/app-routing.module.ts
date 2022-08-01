import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEducacionComponent } from './educacion/editar-educacion.component';
import { ListaEducacionComponent } from './educacion/lista-educacion.component';
import { NuevoEducacionComponent } from './educacion/nuevo-educacion.component';
import { EditarExperienciaComponent } from './experiencia/editar-experiencia.component';


import { NuevoExperienciaComponent } from './experiencia/nuevo-experiencia.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'educacion', component: NuevoEducacionComponent },
  { path: 'experiencia', component: NuevoExperienciaComponent },
  { path: 'educacion/:id', component: EditarEducacionComponent },
  { path: 'experiencia/:id', component: EditarExperienciaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
