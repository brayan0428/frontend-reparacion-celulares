import { Component, OnInit } from '@angular/core';
import { Reparacion } from 'src/app/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-listado-reparaciones',
  templateUrl: './listado-reparaciones.component.html',
  styleUrls: ['./listado-reparaciones.component.css'],
})
export class ListadoReparacionesComponent implements OnInit {
  reparaciones: Reparacion[] = [];

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this._apiService.consultarReparaciones().subscribe((data) => {
      this.reparaciones = data;
    });
  }
}
