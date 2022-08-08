import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimengModule } from 'src/app/primeng.module';
import { MentorResolver } from '@service/auth/mentor/mentor.resolver';
import { UserViewComponent } from './user-view/user-view.component';
import { MarkTableComponent } from './user-view/mark-table/mark-table.component';
import { ActivityTableComponent } from './user-view/activity-table/activity-table.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: AdminComponent,
        //resolve: { mentorData: MentorResolver },
      },
      { path: ':id/user/:uid', component: UserViewComponent },
    ],
  },
];

@NgModule({
  declarations: [AdminComponent, UserViewComponent, MarkTableComponent, ActivityTableComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PrimengModule],
})
export class AdminModule {}
