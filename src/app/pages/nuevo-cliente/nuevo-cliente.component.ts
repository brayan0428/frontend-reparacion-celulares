import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css'],
})
export class NuevoClienteComponent implements OnInit {
  public formGroup: FormGroup = this._fb.group({});

  constructor(
    private _fb: FormBuilder,
    private _apiService: ApiService,
    private _router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm() {
    this.formGroup = this._fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      celular: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const cliente = this.formGroup.value;
    this._apiService.crearCliente(cliente).subscribe(async (data) => {
      await Swal.fire('Confirmación', 'Cliente creado exitosamente', 'success');
      this._router.navigate(['/dashboard/clientes']);
    });
  }

  getControl(controlName: string) {
    const control = this.formGroup.get(controlName);
    return control;
  }
}
