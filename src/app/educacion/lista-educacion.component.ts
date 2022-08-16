import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from '../models/educacion';
import { EducacionService } from '../service/educacion.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-lista-educacion',
  templateUrl: './lista-educacion.component.html',
  styleUrls: ['./lista-educacion.component.css'],
})
export class ListaEducacionComponent implements OnInit {
  ListaEducacion: Educacion[] = [];
  isAdmin = false;

  constructor(
    private educacionService: EducacionService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.cargarListaEducacion();
    this.isAdmin = this.tokenService.isAdmin();

  }

  cargarListaEducacion(): void {
    this.educacionService.lista().subscribe(
      (data) => {
        this.ListaEducacion = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.educacionService.delete(id).subscribe(
      (data) => {
        this.toastr.success('Lista de educación eliminada', 'OK', {
          timeOut: 3000,
        });
        this.cargarListaEducacion();
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', { timeOut: 3000 });
      }
    );
  }



}
