import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { EditarEducacionComponent } from './educacion/editar-educacion.component';
import { NuevoEducacionComponent } from './educacion/nuevo-educacion.component';
import { EditarExperienciaComponent } from './experiencia/editar-experiencia.component';
import { EduGuardService as guard } from './guards/edu-guard.service';


import { NuevoExperienciaComponent } from './experiencia/nuevo-experiencia.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'educacion', component: NuevoEducacionComponent,canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'experiencia', component: NuevoExperienciaComponent,canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'educacion/:id', component: EditarEducacionComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'experiencia/:id', component: EditarExperienciaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
