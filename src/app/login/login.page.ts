import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  password: string = ''; // Variable para almacenar el password ingresado
  passwordValido: boolean = false; // Variable para habilitar/deshabilitar el botón

  constructor() {}

  validarPassword() {
    const regex = /^(?=.*\d{4})(?=.*[a-zA-Z]{3})(?=.*[A-Z]).{8,}$/;

    if (regex.test(this.password)) {
      this.passwordValido = true;
    } else {
      this.passwordValido = false;
    }
  }
}