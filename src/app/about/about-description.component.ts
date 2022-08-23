import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { About } from '../models/about';
import { AboutService } from '../service/about.service';

@Component({
  selector: 'app-about-description',
  templateUrl: './about-description.component.html',
  styleUrls: ['./about-description.component.css']
})
export class AboutDescriptionComponent implements OnInit {

  about : About = {};

  constructor(private aboutService: AboutService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {  const id = this.activatedRoute.snapshot.params['id'];
  this.aboutService.detail(id).subscribe((data) => {
    this.about = data;
  });
  }
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.aboutService.update(id, this.about).subscribe(
      (data) => {
        this.toastr.success('Sobre mi actualizado', 'OK', {
          timeOut: 3000,
        });
        window.location.href='/#about';
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
        });
      }
    );
  }

}
