import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { About } from '../models/about';
import { AboutService } from '../service/about.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  isAdmin = false;
  about: About = {} ;

  constructor(
    private tokenService: TokenService,
    private aboutService: AboutService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.tokenService.isAdmin();
    this.aboutService.detail(49).subscribe(
      (data) => {
        this.about = data;
      },
      (err) => {
        this.toastr.error(err.error.message, 'Fail', { timeOut: 3000 });
        this.router.navigate(['/']);
      }
    );
  }



  onUpdate(): void {
    const id = 49;
    this.aboutService.update(id, this.about).subscribe(
      (data) => {
        this.toastr.success('Actualizado', 'OK', {
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

  cargarAbout(): void {
    this.aboutService.detail(49).subscribe(
      data => {
        this.about = data;
      },

    );
  }



}
