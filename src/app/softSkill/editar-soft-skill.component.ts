import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SoftSkill } from '../models/soft-skill';
import { SoftSkillService } from '../service/soft-skill.service';


@Component({
  selector: 'app-editar-soft-skill',
  templateUrl: './editar-soft-skill.component.html',
  styleUrls: ['./editar-soft-skill.component.css']
})
export class EditarSoftSkillComponent implements OnInit {
  softSkill: SoftSkill = null;
  constructor( private softSkillService: SoftSkillService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

    ngOnInit() {
      const id = this.activatedRoute.snapshot.params['id'];
      this.softSkillService.detail(id).subscribe((data) => {
        this.softSkill = data;
      });
    }

    onUpdate(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.softSkillService.update(id, this.softSkill).subscribe(
        (data) => {
          this.toastr.success('Soft skill actualizada', 'OK', {
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
