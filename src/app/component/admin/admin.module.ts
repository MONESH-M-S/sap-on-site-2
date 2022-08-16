import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimengModule } from 'src/app/primeng.module';
import { UserViewComponent } from './user-view/user-view.component';
import { MarkTableComponent } from './user-view/mark-table/mark-table.component';
import { ActivityTableComponent } from './user-view/activity-table/activity-table.component';
import { UserResolver } from '@service/user/resolver/user.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MentorResolver } from '@service/mentor/resolver/mentor.resolver';
import { ShowAdminComponent } from './show-admin/show-admin.component';
import { AllAdminResolver } from '@service/mentor/resolver/all-admin.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'show-all-m',
        component: ShowAdminComponent,
        resolve: {
          mentors: AllAdminResolver,
        },
      },
      {
        path: ':id',
        component: AdminComponent,
        resolve: { userData: UserResolver, availableStudents: MentorResolver },
      },
      {
        path: ':aid/s/:id',
        component: UserViewComponent,
        resolve: { userData: UserResolver },
      },
    ],
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    UserViewComponent,
    MarkTableComponent,
    ActivityTableComponent,
    ShowAdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AdminModule {}
