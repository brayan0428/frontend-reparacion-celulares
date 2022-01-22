import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-reparacion',
  templateUrl: './nueva-reparacion.component.html',
  styleUrls: ['./nueva-reparacion.component.css'],
})
export class NuevaReparacionComponent implements OnInit {
  id: string = '';
  formGroup: FormGroup = this._fb.group({});

  constructor(
    private _fb: FormBuilder,
    private _apiService: ApiService,
    private _router: Router,
    private _activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this._activateRoute.snapshot.params['id'];
    this.formBuild();
  }

  formBuild() {
    this.formGroup = this._fb.group({
      descripcion: ['', Validators.required],
      valor: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const reparacion = this.formGroup.value;
    reparacion.id_telefono = this.id;
    this._apiService.crearReparacion(reparacion).subscribe(async (data) => {
      await Swal.fire(
        'Confirmación',
        'Reparación creada exitosamente',
        'success'
      );
      this._router.navigate([`/dashboard/clientes`]);
    });
  }

  getControl(controlName: string) {
    const control = this.formGroup.get(controlName);
    return control;
  }
}
