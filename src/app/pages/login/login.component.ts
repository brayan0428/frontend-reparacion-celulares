import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup = this._fb.group({});

  constructor(
    private _fb: FormBuilder,
    private _apiService: ApiService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    localStorage.removeItem('token');
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this._fb.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const usuario = this.formGroup.value;
    this._apiService.login(usuario).subscribe((data: any) => {
      localStorage.setItem('token', data.message.token);
      this._router.navigate(['/dashboard']);
    });
  }

  getControl(controlName: string) {
    const control = this.formGroup.get(controlName);
    return control;
  }
}
