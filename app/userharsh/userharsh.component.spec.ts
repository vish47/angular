import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserharshComponent } from './userharsh.component';

describe('UserharshComponent', () => {
  let component: UserharshComponent;
  let fixture: ComponentFixture<UserharshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserharshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserharshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
