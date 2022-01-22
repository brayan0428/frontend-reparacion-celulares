import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, Reparacion, Telefono } from '../interfaces';

const URL_BASE = 'http://127.0.0.1:3000/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  login(data: any) {
    return this._http.post('/api/usuarios/login', data);
  }

  registro(data: any) {
    return this._http.post('/api/usuarios', data);
  }

  consultarClientes(): Observable<Cliente[]> {
    return this._http.get<Cliente[]>('/api/clientes');
  }

  crearCliente(data: any) {
    return this._http.post('/api/clientes', data);
  }

  consultarTelefonosCliente(id: string): Observable<Telefono[]> {
    return this._http.get<Telefono[]>(`/api/telefonos/${id}`);
  }

  crearTelefono(data: any) {
    return this._http.post('/api/telefonos', data);
  }

  crearReparacion(data: any) {
    return this._http.post('/api/reparaciones', data);
  }

  consultarReparaciones(): Observable<Reparacion[]> {
    return this._http.get<Reparacion[]>('/api/reparaciones');
  }
}
