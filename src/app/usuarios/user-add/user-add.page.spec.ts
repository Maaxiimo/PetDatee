import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { UserAddPage } from './user-add.page';

describe('UserAddPage', () => {
  let component: UserAddPage;
  let fixture: ComponentFixture<UserAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
