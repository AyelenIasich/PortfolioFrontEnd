import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../service/proyecto.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css'],
})
export class ListaProyectosComponent implements OnInit {
  ListaProyecto: Proyecto[] = [];
  isAdmin = false;

  constructor(
    private proyectoService: ProyectoService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.cargarListaProyecto();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarListaProyecto(): void {
    this.proyectoService.lista().subscribe(
      (data) => {
        this.ListaProyecto = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.proyectoService.delete(id).subscribe(
      (data) => {
        this.toastr.success('Proyecto eliminado', 'OK', {
          timeOut: 3000,
        });
        this.cargarListaProyecto();
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', { timeOut: 3000 });
      }
    );
  }
}
