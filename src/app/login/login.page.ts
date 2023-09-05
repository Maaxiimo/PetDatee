import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
})
export class LoginPage {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      contrasena: [
        'password',
        [Validators.required, this.validarContrasena]
      ]
    });
  }

  validarContrasena(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (value && value.length >= 8 && /[A-Z]/.test(value) && /\d/.test(value)) {
      return null;
    } else {
      return { contrasenaInvalida: true };
    }
  }

  enviarFormulario() {
    // Agrega aquí el código para manejar el envío del formulario
  }
}
