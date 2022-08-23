import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Trabajo } from '../models/trabajo';
import { TrabajoService } from '../service/trabajo.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css'],
})
export class EditarExperienciaComponent implements OnInit {
  trabajo: Trabajo = null;

  constructor(
    private trabajoService:TrabajoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.trabajoService.detail(id).subscribe(
      (data) => {
        this.trabajo = data;
      },
      (err) => {
        this.toastr.error(err.error.message, 'Fail', { timeOut: 3000 });
        this.router.navigate(['/']);
      }
    );
  }
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.trabajoService.update(id, this.trabajo).subscribe(
      (data) => {
        this.toastr.success('Experiencia actualizada', 'OK', {
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
}

