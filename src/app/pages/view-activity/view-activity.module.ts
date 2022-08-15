import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewActivityComponent } from './view-activity.component';
import { PrimengModule } from 'src/app/primeng.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', children: [{ path: ':id', component: ViewActivityComponent }] },
];

@NgModule({
  declarations: [ViewActivityComponent],
  imports: [CommonModule, PrimengModule, RouterModule.forChild(routes)],
})
export class ViewActivityModule {}
