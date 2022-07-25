import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from '../models/experiencia';
import { ExperienciaService } from '../service/experiencia.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-lista-experiencia',
  templateUrl: './lista-experiencia.component.html',
  styleUrls: ['./lista-experiencia.component.css'],
})
export class ListaExperienciaComponent implements OnInit {
  ListaExperiencia: Experiencia[] = [];

  constructor(
    private experienciaService: ExperienciaService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.cargarListaExperiencia();

  }

  cargarListaExperiencia(){
    this.experienciaService.lista().subscribe(
      data => {
        this.ListaExperiencia = data;
      }
    )
  }

  borrar(id: number){
    this.experienciaService.delete(id).subscribe(
      data => {
        this.toastr.success('Experiencia Eliminada', 'OK', { timeOut: 3000});
        this.cargarListaExperiencia();
      }, err => {
        this.toastr.error(err.error.message, 'Fail', { timeOut: 3000});

      }
    )
  }


  onDropped(event:CdkDragDrop<any>){
    console.log(event);
    const anterior = event.previousIndex;
    const actual = event.currentIndex;
    moveItemInArray(this.ListaExperiencia, anterior, actual);
  }


}
