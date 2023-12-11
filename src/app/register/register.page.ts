import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = localStorage.getItem('username') || '';
  password: string = localStorage.getItem('password') || '';
  email: string = localStorage.getItem('email') || '';
  usernameError: boolean = false;
  passwordError: boolean = false;
  emailError: boolean = false;

  constructor(private navCtrl: NavController) {}

  register() {
    if (this.isValidForm()) {
      // Aquí puedes agregar la lógica de registro

       // Muestra los datos proporcionados en la consola antes de registrar
       console.log('Datos proporcionados:', { username: this.username, password: this.password, email: this.email });

      // Guarda los valores en localStorage
      localStorage.setItem('username', this.username);
      localStorage.setItem('password', this.password);
      localStorage.setItem('email', this.email);

      // Marca como registrado en localStorage
      localStorage.setItem('isRegistered', 'true');

      // Muestra mensajes en la consola
      console.log('Registro exitoso');

      // Navega a la página de inicio de sesión (login)
      this.navCtrl.navigateRoot('/login');
    } else {
      // Muestra mensajes en la consola
      console.log('Error en el registro. Por favor, verifica tus datos.');
    }
  }

  isValidForm(): boolean {
    this.usernameError = this.username.trim().length === 0;
    this.passwordError = !/^(?=.*[A-Z])(?=.*\d.*\d.*\d)(.{3,})$/.test(this.password);
    this.emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    return !this.usernameError && !this.passwordError && !this.emailError;
  }
}
