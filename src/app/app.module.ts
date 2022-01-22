import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthComponent } from './layout/auth/auth.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ListadoClientesComponent } from './pages/listado-clientes/listado-clientes.component';
import { NuevoClienteComponent } from './pages/nuevo-cliente/nuevo-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListadoTelefonosComponent } from './pages/listado-telefonos/listado-telefonos.component';
import { InterceptorHeadersService } from './interceptors/interceptor-headers.service';
import { InterceptorErrorService } from './interceptors/interceptor-error.service';
import { HomeComponent } from './pages/home/home.component';
import { NuevoTelefonoComponent } from './pages/nuevo-telefono/nuevo-telefono.component';
import { NuevaReparacionComponent } from './pages/nueva-reparacion/nueva-reparacion.component';
import { ListadoReparacionesComponent } from './pages/listado-reparaciones/listado-reparaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    AuthComponent,
    DashboardComponent,
    ListadoClientesComponent,
    NuevoClienteComponent,
    ListadoTelefonosComponent,
    HomeComponent,
    NuevoTelefonoComponent,
    NuevaReparacionComponent,
    ListadoReparacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorHeadersService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorErrorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
