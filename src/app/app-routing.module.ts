import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoClientesComponent } from './pages/listado-clientes/listado-clientes.component';
import { ListadoReparacionesComponent } from './pages/listado-reparaciones/listado-reparaciones.component';
import { ListadoTelefonosComponent } from './pages/listado-telefonos/listado-telefonos.component';
import { LoginComponent } from './pages/login/login.component';
import { NuevaReparacionComponent } from './pages/nueva-reparacion/nueva-reparacion.component';
import { NuevoClienteComponent } from './pages/nuevo-cliente/nuevo-cliente.component';
import { NuevoTelefonoComponent } from './pages/nuevo-telefono/nuevo-telefono.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'registro',
        component: RegistroComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'clientes',
        component: ListadoClientesComponent,
      },
      {
        path: 'clientes/nuevo',
        component: NuevoClienteComponent,
      },
      {
        path: 'telefonos/:id',
        component: ListadoTelefonosComponent,
      },
      {
        path: 'telefonos/nuevo/:id',
        component: NuevoTelefonoComponent,
      },
      {
        path: 'reparaciones',
        component: ListadoReparacionesComponent,
      },
      {
        path: 'reparaciones/nuevo/:id',
        component: NuevaReparacionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
