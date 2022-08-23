import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../service/proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
  proyecto: Proyecto = null;

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe((data) => {
      this.proyecto = data;
    });
  }


  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.update(id, this.proyecto).subscribe(
      (data) => {
        this.toastr.success('Proyecto actualizado', 'OK', {
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
