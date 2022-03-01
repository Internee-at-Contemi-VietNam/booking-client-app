import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersProfileViewComponent } from './profile-view/profile-view.component';
import { EditProfileComponent } from './components/profile-edit/profile-edit.component';
import { ProfileViewDetailsComponent } from './components/profile-view-details/profile-view-details.component';

const COMPONENTS: any[] = [
  UsersProfileViewComponent,
  EditProfileComponent,
  ProfileViewDetailsComponent,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, UsersRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, ProfileViewDetailsComponent],
})
export class UsersModule {}
