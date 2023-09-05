import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: 'loading.page.html',
})
export class LoadingPage {

  constructor(private navCtrl: NavController, private router: Router) {
    // Simula una tarea de carga (puedes reemplazar esto con tu lógica real de carga)
    setTimeout(() => {
      // Redirige a la página "home"
      this.router.navigate(['/home']);
    }, 3000); // Redirige después de 3 segundos (ajusta el tiempo según tus necesidades)
  }
}