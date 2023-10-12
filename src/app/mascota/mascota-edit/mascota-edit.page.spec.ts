import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MascotaEditPage } from './mascota-edit.page';

describe('MascotaEditPage', () => {
  let component: MascotaEditPage;
  let fixture: ComponentFixture<MascotaEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MascotaEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
