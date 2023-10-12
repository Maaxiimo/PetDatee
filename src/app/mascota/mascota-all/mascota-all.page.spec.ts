import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MascotaAllPage } from './mascota-all.page';

describe('MascotaAllPage', () => {
  let component: MascotaAllPage;
  let fixture: ComponentFixture<MascotaAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MascotaAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
