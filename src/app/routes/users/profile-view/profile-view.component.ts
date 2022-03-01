import { Component, OnInit } from '@angular/core';
import { UserInterface } from '@core';

@Component({
  selector: 'app-users-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class UsersProfileViewComponent implements OnInit {
  user!: UserInterface;

  constructor() {}

  ngOnInit() {
    this.user = {
      id: '51702187-aaa',
      email: 'harry.hoang@contemi.com',
      firstname: 'Harry',
      lastname: 'Hoang',
      gender: 'male',
      dateOfBirth: '',
      avatarUrl: '',
      role: 'user',
    };
  }

  isOpenEdit = false;
  onPress() {
    //this.display = true;

    //To toggle the component
    this.isOpenEdit = !this.isOpenEdit;
  }
}
