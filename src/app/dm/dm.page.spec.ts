import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DMPage } from './dm.page';

describe('DMPage', () => {
  let component: DMPage;
  let fixture: ComponentFixture<DMPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
