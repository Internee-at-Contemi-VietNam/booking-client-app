import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersProfileViewComponent } from './profile-view/profile-view.component';


const routes: Routes = [

  { path: 'profile', component: UsersProfileViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
