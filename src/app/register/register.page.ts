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
    // Check if passwords match
    if (this.password !== this.confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    const registered = await this.authService.register(this.username, this.password);  
  }
}