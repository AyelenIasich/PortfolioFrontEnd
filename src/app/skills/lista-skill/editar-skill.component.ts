import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent implements OnInit {
  skill: Skill = null;

  constructor(
    private skillService: SkillService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }


  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.detail(id).subscribe((data) => {
      this.skill = data;
    });
  }


  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.update(id, this.skill).subscribe(
      (data) => {
        this.toastr.success('Skill actualizada', 'OK', {
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
