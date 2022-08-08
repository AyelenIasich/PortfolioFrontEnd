import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from '../models/persona';
import { ExperienciaService } from '../service/experiencia.service';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-editar-main',
  templateUrl: './editar-main.component.html',
  styleUrls: ['./editar-main.component.css'],
})
export class EditarMainComponent implements OnInit {
  persona: Persona = null;

  constructor(
    private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      (data) => {
        this.persona = data;
      },
      (err) => {
        this.toastr.error(err.error.message, 'Fail', { timeOut: 3000 });
        this.router.navigate(['/']);
      }
    );
  }
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      (data) => {
        this.toastr.success('Actualizado', 'OK', {
          timeOut: 3000,
        });
        this.router.navigate(['/']);
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
        });

      }
    );
  }
}
