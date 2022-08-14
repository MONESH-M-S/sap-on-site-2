import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserViewComponent } from '@component/admin/user-view/user-view.component';
import { LoginComponent } from '@page/login/login.component';
import { SignupComponent } from '@page/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user/:id/edit-detail', component: SignupComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('@component/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'mentor',
    loadChildren: () =>
      import('@component/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'user/:uid/activity',
    loadChildren: () =>
      import('@page/activity/activity.module').then((m) => m.ActivityModule),
  },
  {
    path: 'user/:uid/activity/:aid',
    loadChildren: () =>
      import('@page/view-activity/view-activity.module').then((m) => m.ViewActivityModule),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
