import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MascotaAddPage } from './mascota-add.page';

describe('MascotaAddPage', () => {
  let component: MascotaAddPage;
  let fixture: ComponentFixture<MascotaAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MascotaAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
