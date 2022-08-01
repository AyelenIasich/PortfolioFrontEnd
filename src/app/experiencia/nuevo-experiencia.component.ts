import { Component, OnInit } from '@angular/core';

import { Experiencia } from '../models/experiencia';
import { ExperienciaService } from '../service/experiencia.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-experiencia',
  templateUrl: './nuevo-experiencia.component.html',
  styleUrls: ['./nuevo-experiencia.component.css'],
})
export class NuevoExperienciaComponent implements OnInit {
  nombre: string = '';
  inicio: number;
  fin: number;
  lugar: string = '';
  titulo: string = '';
  imagen: string = '';
  descripcion: string = '';
  modalidad: string = '';

  constructor(
    private experienciaService: ExperienciaService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  onCreate(): void {
    const experiencia = new Experiencia(
      this.nombre,
      this.inicio,
      this.fin,
      this.modalidad,
      this.lugar,
      this.imagen,
      this.descripcion
    );
    this.experienciaService.save(experiencia).subscribe(
      (data) => {
        this.toastr.success('Nueva lista de experiencia creada', 'OK', {
          timeOut: 3000
        });
        this.router.navigate(['/']);
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000
        });
        this.router.navigate(['/']);

      }
    );
  }

  ngOnInit(): void {}
}
