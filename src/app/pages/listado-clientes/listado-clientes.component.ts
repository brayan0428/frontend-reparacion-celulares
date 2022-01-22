import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css'],
})
export class ListadoClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this._apiService.consultarClientes().subscribe((data: Cliente[]) => {
      this.clientes = data;
    });
  }
}
