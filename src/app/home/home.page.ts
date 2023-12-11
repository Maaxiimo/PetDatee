import { Component, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { Router } from '@angular/router';

import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  username: string = localStorage.getItem('username') || '';

  @ViewChild(IonCard, { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;
  isModalOpen = false;

  private animation!: Animation;

  constructor(private animationCtrl: AnimationController, private authService: AuthService, private navCtrl: NavController) {}

  async logout() {
    await this.authService.logout();
    this.navCtrl.navigateRoot('/login');
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(3000)
      .direction('alternate')
      .fromTo('background', 'red', 'var(--background)');
  }

  play() {
    this.animation.play();
  }

  playGreen() {
    // Crea una nueva animación para el color verde
    const greenAnimation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(3000)
      .direction('alternate')
      .fromTo('background', 'green', 'var(--background)');

      greenAnimation.play();
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}