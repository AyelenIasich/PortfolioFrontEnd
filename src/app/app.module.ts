import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http'

import {FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
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
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { interceptorProvider } from './interceptors/edu-interceptor.service';




//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DragDropModule } from '@angular/cdk/drag-drop';



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
    MenuComponent,
    IndexComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
