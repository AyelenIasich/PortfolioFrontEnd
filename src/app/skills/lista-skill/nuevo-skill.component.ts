import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-nuevo-skill',
  templateUrl: './nuevo-skill.component.html',
  styleUrls: ['./nuevo-skill.component.css'],
})
export class NuevoSkillComponent implements OnInit {
  porcentaje: number;
  urlLogo: string = '';
  skill: string = '';

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private skillService: SkillService
  ) {}

  ngOnInit() {}

  onCreate(): void {
    const skill = new Skill(this.porcentaje, this.urlLogo, this.skill);
    this.skillService.save(skill).subscribe(
      (data) => {
        this.toastr.success('Nueva skill creada', 'OK', {
          timeOut: 3000,
        });
        window.location.href='/#skill';
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
        });
      }
    );
  }
}
