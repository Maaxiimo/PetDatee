import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MascotaListPage } from './mascota-list.page';

describe('MascotaListPage', () => {
  let component: MascotaListPage;
  let fixture: ComponentFixture<MascotaListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MascotaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
