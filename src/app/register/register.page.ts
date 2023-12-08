import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = localStorage.getItem('register_username') || '';
  password: string = localStorage.getItem('register_password') || '';
  email: string = localStorage.getItem('register_email') || '';
  usernameError: boolean = false;
  passwordError: boolean = false;
  emailError: boolean = false;

  constructor(private navCtrl: NavController) {}

  register() {
    if (this.isValidForm()) {
      // Aquí puedes agregar la lógica de registro
      // Por ahora, simplemente navegarás a la página de inicio
      this.saveFormData();
      this.navCtrl.navigateRoot('/home');
    }
  }

  isValidForm(): boolean {
    this.usernameError = this.username.trim().length === 0;
    this.passwordError = !/^(?=.*[A-Z])(?=.*\d.*\d.*\d)(.{3,})$/.test(this.password);
    this.emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    return !this.usernameError && !this.passwordError && !this.emailError;
  }

  private saveFormData(): void {
    localStorage.setItem('register_username', this.username);
    localStorage.setItem('register_password', this.password);
    localStorage.setItem('register_email', this.email);
  }
}
