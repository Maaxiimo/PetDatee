import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private navCtrl: NavController, private storage: Storage) {}

  async register() {
    const registered = await this.authService.register(this.username, this.password);
    if (registered) {
      console.log('Usuario registrado correctamente',this.username);
    } else {
      console.log('Error al registrar el usuario');
    }
}
}