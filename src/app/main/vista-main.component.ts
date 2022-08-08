import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from '../models/persona';
import { PersonaService } from '../service/persona.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-vista-main',
  templateUrl: './vista-main.component.html',
  styleUrls: ['./vista-main.component.css'],
})
export class VistaMainComponent implements OnInit {
  persona: Persona = null;
  isAdmin = false;

  constructor(
    private personaService: PersonaService,
    private tokenService: TokenService,
  ) {}

  ngOnInit() {
    this.cargarPersona();
    this.isAdmin = this.tokenService.isAdmin();
  }



  cargarPersona(): void {
    this.personaService.detail(44).subscribe(
      data => {
        this.persona = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
