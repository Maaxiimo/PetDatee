import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = localStorage.getItem('login_username') || '';
  password: string = localStorage.getItem('login_password') || '';
  usernameError: boolean = false;
  passwordError: boolean = false;

  constructor(private navCtrl: NavController) {}

  login() {
    if (this.isValidForm()) {
      // Aquí puedes agregar la lógica de autenticación
      // Por ahora, simplemente navegarás a la página de inicio
      this.saveFormData();
      this.navCtrl.navigateRoot('/home');
    }
  }

  isValidForm(): boolean {
    this.usernameError = this.username.trim().length === 0;
    this.passwordError = !/^(?=.*[A-Z])(?=.*\d.*\d.*\d)(.{3,})$/.test(this.password);
    return !this.usernameError && !this.passwordError;
  }

  private saveFormData(): void {
    localStorage.setItem('login_username', this.username);
    localStorage.setItem('login_password', this.password);
  }
}
