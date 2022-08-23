import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { EditarEducacionComponent } from './educacion/editar-educacion.component';
import { NuevoEducacionComponent } from './educacion/nuevo-educacion.component';
import { EditarExperienciaComponent } from './experiencia/editar-experiencia.component';
import { EduGuardService } from './guards/edu-guard.service';
import { NuevoExperienciaComponent } from './experiencia/nuevo-experiencia.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './guards/login.guard';
import { EditarMainComponent } from './main/editar-main.component';
import { AboutDescriptionComponent } from './about/about-description.component';
import { EditarAboutComponent } from './about/editar-about.component';
import { NuevoSkillComponent } from './skills/lista-skill/nuevo-skill.component';
import { EditarSkillComponent } from './skills/lista-skill/editar-skill.component';
import { NuevoSoftSkillComponent } from './softSkill/nuevo-soft-skill.component';
import { EditarSoftSkillComponent } from './softSkill/editar-soft-skill.component';
import { EditarProyectoComponent } from './proyectos/editar-proyecto.component';
import { NuevoProyectoComponent } from './proyectos/nuevo-proyecto.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
  {
    path: 'persona/:id',
    component: EditarMainComponent,
    canActivate: [EduGuardService],
    data: { expectedRol: ['admin'] },
  },

  {
    path: 'aboutdescription/:id',
    component: AboutDescriptionComponent,
    canActivate: [EduGuardService],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'about/:id',
    component: EditarAboutComponent,
    canActivate: [EduGuardService],
    data: { expectedRol: ['admin'] },
  },


  {
    path: 'educacion',
    component: NuevoEducacionComponent,
    canActivate: [EduGuardService],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'experiencia',
    component: NuevoExperienciaComponent,
    canActivate: [EduGuardService],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'skill',
    component: NuevoSkillComponent,
    canActivate: [EduGuardService],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'softskill',
    component: NuevoSoftSkillComponent,
    canActivate: [EduGuardService],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'proyectos',
    component: NuevoProyectoComponent,
    canActivate: [EduGuardService],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'proyectos/:id',
    component: EditarProyectoComponent,
    canActivate: [EduGuardService],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'skill/:id',
    component: EditarSkillComponent,
    canActivate: [EduGuardService],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'softskill/:id',
    component: EditarSoftSkillComponent,
    canActivate: [EduGuardService],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'educacion/:id',
    component: EditarEducacionComponent,
    canActivate: [EduGuardService],
    data: { expectedRol: ['admin'] },
  },
  {
    path: 'experiencia/:id',
    component: EditarExperienciaComponent,
    canActivate: [EduGuardService],
    data: { expectedRol: ['admin'] },
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
