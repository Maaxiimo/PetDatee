import { Component, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonCard, { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;
  isModalOpen = false;

  private animation!: Animation;

  constructor(private animationCtrl: AnimationController) {}

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
  
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}