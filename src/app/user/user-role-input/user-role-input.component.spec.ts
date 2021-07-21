import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleInputComponent } from './user-role-input.component';

describe('UserRoleInputComponent', () => {
  let component: UserRoleInputComponent;
  let fixture: ComponentFixture<UserRoleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRoleInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRoleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
