import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimengModule } from 'src/app/primeng.module';
import { MentorResolver } from '@service/auth/mentor/mentor.resolver';

const routes: Routes = [
  {
    path: ':id',
    component: AdminComponent,
    resolve: { mentorData: MentorResolver },
  },
];

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PrimengModule],
})
export class AdminModule {}
