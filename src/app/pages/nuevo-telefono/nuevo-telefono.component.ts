import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-telefono',
  templateUrl: './nuevo-telefono.component.html',
  styleUrls: ['./nuevo-telefono.component.css'],
})
export class NuevoTelefonoComponent implements OnInit {
  id: string = '';
  formGroup: FormGroup = this._fb.group({});

  constructor(
    private _fb: FormBuilder,
    private _activeRoute: ActivatedRoute,
    private _apiService: ApiService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.id = this._activeRoute.snapshot.params['id'];
    this.formBuild();
  }

  formBuild() {
    this.formGroup = this._fb.group({
      marca: ['', Validators.required],
      ano: [new Date().getFullYear.toString(), Validators.required],
    });
  }

  onSubmit(): void {
    const telefono = this.formGroup.value;
    telefono.id_cliente = this.id;
    this._apiService.crearTelefono(telefono).subscribe(async (data) => {
      await Swal.fire(
        'Confirmación',
        'Telefono creado exitosamente',
        'success'
      );
      this._router.navigate([`/dashboard/telefonos/${this.id}`]);
    });
  }

  getControl(controlName: string) {
    const control = this.formGroup.get(controlName);
    return control;
  }
}
