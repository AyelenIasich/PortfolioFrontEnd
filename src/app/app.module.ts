import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ListaEducacionComponent } from './educacion/lista-educacion.component';
import { NuevoEducacionComponent } from './educacion/nuevo-educacion.component';
import { EditarEducacionComponent } from './educacion/editar-educacion.component';
import { VistaMainComponent } from './main/vista-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaExperienciaComponent } from './experiencia/lista-experiencia.component';
import { NuevoExperienciaComponent } from './experiencia/nuevo-experiencia.component';
import { EditarExperienciaComponent } from './experiencia/editar-experiencia.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { AboutComponent } from './about/about.component';
import { EditarAboutComponent } from './about/editar-about.component';
import { EditarMainComponent } from './main/editar-main.component';
import { AboutDescriptionComponent } from './about/about-description.component';

import { interceptorProvider } from './interceptors/edu-interceptor.service';
import { NgCircleProgressModule } from 'ng-circle-progress';

//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListaSkillComponent } from './skills/lista-skill/lista-skill.component';
import { NuevoSkillComponent } from './skills/lista-skill/nuevo-skill.component';
import { EditarSkillComponent } from './skills/lista-skill/editar-skill.component';

import { EditarSoftSkillComponent } from './softSkill/editar-soft-skill.component';
import { ListaSoftSkillComponent } from './softSkill/lista-soft-skill.component';
import { NuevoSoftSkillComponent } from './softSkill/nuevo-soft-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaEducacionComponent,
    NuevoEducacionComponent,
    EditarEducacionComponent,
    VistaMainComponent,
    ListaExperienciaComponent,
    NuevoExperienciaComponent,
    EditarExperienciaComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    EditarMainComponent,
    AboutComponent,
    AboutDescriptionComponent,
    EditarAboutComponent,
    ListaSkillComponent,
    NuevoSkillComponent,
    EditarSkillComponent,

    EditarSoftSkillComponent,
     ListaSoftSkillComponent,
     NuevoSoftSkillComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),

    ReactiveFormsModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
