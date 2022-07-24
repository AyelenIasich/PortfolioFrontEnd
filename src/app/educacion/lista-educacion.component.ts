import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from '../models/educacion';
import { EducacionService } from '../service/educacion.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-lista-educacion',
  templateUrl: './lista-educacion.component.html',
  styleUrls: ['./lista-educacion.component.css']
})
export class ListaEducacionComponent implements OnInit {

  ListaEducacion: Educacion[] = [];

  constructor(
    private educacionService: EducacionService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.cargarListaEducacion();
  }

  cargarListaEducacion():void {
    this.educacionService.lista().subscribe(
      data => {
        this.ListaEducacion = data;
      }
    )
  }

  borrar(id: number){
    this.educacionService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', { timeOut: 3000});
        this.cargarListaEducacion();
      }, err => {
        this.toastr.error(err.error.message, 'Fail', { timeOut: 3000});

      }
    )
  }

  onDropped(event:CdkDragDrop<any>){
    console.log(event);
    const anterior = event.previousIndex;
    const actual = event.currentIndex;
    moveItemInArray(this.ListaEducacion, anterior, actual);
  }
}
