import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@page/login/login.component';
import { SignupComponent } from '@page/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'u',
    loadChildren: () =>
      import('@component/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'm',
    loadChildren: () =>
      import('@component/admin/admin.module').then((m) => m.AdminModule),
  }, 
  {
    path: 'u/:uid/a',
    loadChildren: () =>
      import('@page/activity/activity.module').then((m) => m.ActivityModule),
  }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
