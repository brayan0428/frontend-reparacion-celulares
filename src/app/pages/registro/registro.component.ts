import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  public formGroup: FormGroup = this._fb.group({});

  constructor(
    private _fb: FormBuilder,
    private _apiService: ApiService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.formBuild();
  }

  formBuild() {
    this.formGroup = this._fb.group({
      nombre: ['', Validators.required],
      usuario: ['', Validators.required],
      clave: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const registro = this.formGroup.value;
    this._apiService.registro(registro).subscribe(async (data) => {
      await Swal.fire('Confirmación', 'Usuario creado exitosamente', 'success');
      this._router.navigate(['/']);
    });
  }

  getControl(controlName: string) {
    const control = this.formGroup.get(controlName);
    return control;
  }
}
