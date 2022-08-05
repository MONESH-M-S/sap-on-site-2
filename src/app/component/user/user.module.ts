import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimengModule } from 'src/app/primeng.module';

const routes: Routes = [
  { path: ':id', component: UserComponent },
];

@NgModule({
  declarations: [UserComponent, ActivityListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PrimengModule],
})
export class UserModule {}
