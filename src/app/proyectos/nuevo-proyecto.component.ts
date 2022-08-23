import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../service/proyecto.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css'],
})
export class NuevoProyectoComponent implements OnInit {
  tituloProyecto: string = '';
  tecnologias: string = '';
  descripcionProyecto: string = '';
  urlImagen: string = '';
  urlProyecto: string = '';
  urlRepositorio: string = '';

  constructor(
    private proyectoService: ProyectoService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}

  onCreate(): void {
    const proyecto = new Proyecto(
      this.tituloProyecto,
      this.tecnologias,
      this.descripcionProyecto,
      this.urlImagen,
      this.urlProyecto,
      this.urlRepositorio,

    );
    this.proyectoService.save(proyecto).subscribe(
      (data) => {
        this.toastr.success('Nuevo proyecto creado', 'OK', {
          timeOut: 3000,
        });
        window.location.href='/#lista-proyectos';

      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
        });
      }
    );
  }
}
