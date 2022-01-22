import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Telefono } from 'src/app/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-listado-telefonos',
  templateUrl: './listado-telefonos.component.html',
  styleUrls: ['./listado-telefonos.component.css'],
})
export class ListadoTelefonosComponent implements OnInit {
  telefonos: Telefono[] = [];

  constructor(
    private _activeRoute: ActivatedRoute,
    private _apiService: ApiService
  ) {}

  ngOnInit(): void {
    const { id } = this._activeRoute.snapshot.params;
    this._apiService.consultarTelefonosCliente(id).subscribe((data) => {
      this.telefonos = data;
    });
  }
}
