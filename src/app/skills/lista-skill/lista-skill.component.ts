import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-lista-skill',
  templateUrl: './lista-skill.component.html',
  styleUrls: ['./lista-skill.component.css']
})
export class ListaSkillComponent implements OnInit {

  ListaSkill: Skill[] = [];
  isAdmin = false;

  constructor(
    private skillService: SkillService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.cargarListaSkill();
    this.isAdmin = this.tokenService.isAdmin();

  }
  cargarListaSkill(): void {
    this.skillService.lista().subscribe(
      (data) => {
        this.ListaSkill = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.skillService.delete(id).subscribe(
      (data) => {
        this.toastr.success('Habilidad eliminada', 'OK', {
          timeOut: 3000,
        });
        this.cargarListaSkill();
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', { timeOut: 3000 });
      }
    );
  }


}
