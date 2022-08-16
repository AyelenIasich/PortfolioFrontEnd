import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Trabajo } from '../models/trabajo';
import { TokenService } from '../service/token.service';
import { TrabajoService } from '../service/trabajo.service';

@Component({
  selector: 'app-lista-experiencia',
  templateUrl: './lista-experiencia.component.html',
  styleUrls: ['./lista-experiencia.component.css'],
})
export class ListaExperienciaComponent implements OnInit {
  ListaTrabajo: Trabajo[] = [];
  isAdmin = false;

  constructor(
    private trabajoService: TrabajoService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.cargarListaExperiencia();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarListaExperiencia() {
    this.trabajoService.lista().subscribe((data) => {
      this.ListaTrabajo = data;
    });
  }

  borrar(id: number) {
    this.trabajoService.delete(id).subscribe(
      (data) => {
        this.toastr.success('Experiencia Eliminada', 'OK', { timeOut: 3000 });
        this.cargarListaExperiencia();
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', { timeOut: 3000 });
      }
    );
  }
}
