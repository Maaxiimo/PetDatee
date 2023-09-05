import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: 'loading.page.html',
})
export class LoadingPage {

  constructor(private navCtrl: NavController, private router: Router) {
    
    setTimeout(() => {
      
      this.router.navigate(['/home']);
    }, 3000); 
  }
}
