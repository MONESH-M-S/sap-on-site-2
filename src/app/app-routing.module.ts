import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@page/login/login.component';
import { SignupComponent } from '@page/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 's/:id/edit-detail', component: SignupComponent },
  {
    path: 's',
    loadChildren: () =>
      import('@component/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'm',
    loadChildren: () =>
      import('@component/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 's/a',
    loadChildren: () =>
      import('@page/activity/activity.module').then((m) => m.ActivityModule),
  },
  {
    path: 'view-a',
    loadChildren: () =>
      import('@page/view-activity/view-activity.module').then(
        (m) => m.ViewActivityModule
      ),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
