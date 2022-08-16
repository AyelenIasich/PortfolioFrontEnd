import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SoftSkill } from '../models/soft-skill';
import { SoftSkillService } from '../service/soft-skill.service';

@Component({
  selector: 'app-nuevo-soft-skill',
  templateUrl: './nuevo-soft-skill.component.html',
  styleUrls: ['./nuevo-soft-skill.component.css'],
})
export class NuevoSoftSkillComponent implements OnInit {
  porcentajeSoft: number;
  urlSoft: string = '';
  softSkill: string = '';

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private softSkillService: SoftSkillService
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const softSkill = new SoftSkill(
      this.porcentajeSoft,
      this.urlSoft,
      this.softSkill
    );
    this.softSkillService.save(softSkill).subscribe(
      (data) => {
        this.toastr.success('Nueva skill creada', 'OK', {
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
