import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from '../models/educacion';
import { EducacionService } from '../service/educacion.service';

@Component({
  selector: 'app-nuevo-educacion',
  templateUrl: './nuevo-educacion.component.html',
  styleUrls: ['./nuevo-educacion.component.css'],
})
export class NuevoEducacionComponent implements OnInit {
  nombre: string = '';
  inicio: number;
  fin: number;
  lugar: string = '';
  titulo: string = '';
  imagen: string = '';
  modalidad: string = '';

  constructor(
    private educacionService: EducacionService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}


  onCreate(): void {
    const educacion = new Educacion(
      this.nombre,
      this.inicio,
      this.fin,
      this.lugar,
      this.titulo,
      this.imagen,
      this.modalidad
    );
    this.educacionService.save(educacion).subscribe(
      (data) => {
        this.toastr.success('Nueva lista de educación creada', 'OK', {
          timeOut: 3000
        });
        this.router.navigate(['/']);
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000
        });
      }
    );
  }
}
