import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimengModule } from 'src/app/primeng.module';
import { UserViewComponent } from './user-view/user-view.component';
import { MarkTableComponent } from './user-view/mark-table/mark-table.component';
import { ActivityTableComponent } from './user-view/activity-table/activity-table.component';
import { UserResolver } from '@service/user/user/user.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: AdminComponent,
        resolve: { userData: UserResolver },
      },
      { path: ':id/s/:sid', component: UserViewComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    UserViewComponent,
    MarkTableComponent,
    ActivityTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimengModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class AdminModule {}
