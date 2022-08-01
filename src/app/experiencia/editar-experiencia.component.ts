import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from '../models/experiencia';
import { ExperienciaService } from '../service/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css'],
})
export class EditarExperienciaComponent implements OnInit {
  experiencia: Experiencia = null;

  constructor(
    private experienciaService: ExperienciaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(
      (data) => {
        this.experiencia = data;
      },
      (err) => {
        this.toastr.error(err.error.message, 'Fail', { timeOut: 3000 });
        this.router.navigate(['/']);
      }
    );
  }
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.update(id, this.experiencia).subscribe(
      (data) => {
        this.toastr.success('Experiencia actualizada', 'OK', {
          timeOut: 3000,
        });
        this.router.navigate(['/']);
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
        });
        this.router.navigate(['/']);
      }
    );
  }
}

