import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SoftSkill } from '../models/soft-skill';
import { SoftSkillService } from '../service/soft-skill.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-lista-soft-skill',
  templateUrl: './lista-soft-skill.component.html',
  styleUrls: ['./lista-soft-skill.component.css']
})
export class ListaSoftSkillComponent implements OnInit {

  ListaSoftSkill: SoftSkill[] = [];
  isAdmin = false;

  constructor( private softSkillService: SoftSkillService,
    private toastr: ToastrService,
    private tokenService: TokenService) { }

    ngOnInit(): void {
      this.cargarListaSoftSkill();
      this.isAdmin = this.tokenService.isAdmin();

    }
    cargarListaSoftSkill(): void {
      this.softSkillService.lista().subscribe(
        (data) => {
          this.ListaSoftSkill = data;
        },
        (err) => {
          console.log(err);
        }
      );
    }

    borrar(id: number) {
      this.softSkillService.delete(id).subscribe(
        (data) => {
          this.toastr.success('Soft Skill eliminada', 'OK', {
            timeOut: 3000,
          });
          this.cargarListaSoftSkill();
        },
        (err) => {
          this.toastr.error(err.error.mensaje, 'Fail', { timeOut: 3000 });
        }
      );
    }


}
