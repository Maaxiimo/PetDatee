import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MascotaDetailPage } from './mascota-detail.page';

describe('MascotaDetailPage', () => {
  let component: MascotaDetailPage;
  let fixture: ComponentFixture<MascotaDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MascotaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
