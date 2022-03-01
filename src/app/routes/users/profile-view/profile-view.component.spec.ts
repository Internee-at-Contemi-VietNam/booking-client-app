import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersProfileViewComponent } from './profile-view.component';

describe('UsersProfileViewComponent', () => {
  let component: UsersProfileViewComponent;
  let fixture: ComponentFixture<UsersProfileViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersProfileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
