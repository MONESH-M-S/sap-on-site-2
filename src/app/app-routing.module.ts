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
      import('./component/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'a',
    loadChildren: () =>
      import('./component/admin/admin.module').then((m) => m.AdminModule),
  }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
