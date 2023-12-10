import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = localStorage.getItem('username') || '';
  password: string = localStorage.getItem('password') || '';
  email: string = localStorage.getItem('email') || '';
  usernameError: boolean = false;
  passwordError: boolean = false;
  emailError: boolean = false;

  constructor(private navCtrl: NavController) {}

  login() {
    if (this.isValidForm()) {
      // Verifica si el usuario está registrado
      const registeredUsername = localStorage.getItem('username');
      const registeredPassword = localStorage.getItem('password');
      const isRegistered = registeredUsername === this.username && registeredPassword === this.password;

      if (isRegistered) {
        // Aquí puedes agregar la lógica de autenticación

        // Navega a la página de inicio
        this.navCtrl.navigateRoot('/home');
      } else {
        // Si no está registrado, muestra un mensaje de error o realiza una acción específica
        console.log('Usuario no registrado. Por favor, regístrate.');
      }
    }
  }

  isValidForm(): boolean {
    this.usernameError = this.username.trim().length === 0;
    this.passwordError = !/^(?=.*[A-Z])(?=.*\d.*\d.*\d)(.{3,})$/.test(this.password);
    this.emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    return !this.usernameError && !this.passwordError && !this.emailError;
  }
}
