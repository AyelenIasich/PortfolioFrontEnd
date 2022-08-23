import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Trabajo } from '../models/trabajo';
import { TrabajoService } from '../service/trabajo.service';

@Component({
  selector: 'app-nuevo-experiencia',
  templateUrl: './nuevo-experiencia.component.html',
  styleUrls: ['./nuevo-experiencia.component.css'],
})
export class NuevoExperienciaComponent implements OnInit {
  tituloTrab: string = '';
  inicioTrab: number;
  finTrab: number;
  descripcionTrab: string = '';
  urlTrab: string = '';
  direccionTrab: string = '';


  constructor(
    private trabajoService: TrabajoService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  onCreate(): void {
    const trabajo = new Trabajo(
      this.direccionTrab,
      this.tituloTrab,
      this.inicioTrab,
      this.finTrab,
      this.descripcionTrab,
      this.urlTrab
    );
    this.trabajoService.save(trabajo).subscribe(
      (data) => {
        this.toastr.success('Nueva lista de experiencia creada', 'OK', {
          timeOut: 3000,
        });
        window.location.href='/#experiencia';
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
        });
      }
    );
  }

  ngOnInit(): void {}
}
