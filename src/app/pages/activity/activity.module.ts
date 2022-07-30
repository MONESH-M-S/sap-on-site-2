import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from 'src/app/primeng.module';
import { RouterModule, Routes } from '@angular/router';

import { ClubComponent } from './club/club.component';
import { InternComponent } from './intern/intern.component';
import { NccNssComponent } from './ncc-nss/ncc-nss.component';
import { NptelComponent } from './nptel/nptel.component';
import { PaperComponent } from './paper/paper.component';
import { PlacementComponent } from './placement/placement.component';
import { ProjectPaperComponent } from './project-paper/project-paper.component';
import { ProjectComponent } from './project/project.component';
import { SportsComponent } from './sports/sports.component';
import { TechnoManagerialComponent } from './techno-managerial/techno-managerial.component';
import { VoluntaryComponent } from './voluntary/voluntary.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { ActivityComponent } from './activity.component';

const routes: Routes = [
  {path: '', component: ActivityComponent}
];

@NgModule({
  declarations: [
    ActivityComponent,
    PaperComponent,
    ProjectComponent,
    ClubComponent,
    WorkshopComponent,
    TechnoManagerialComponent,
    SportsComponent,
    ProjectPaperComponent,
    NptelComponent,
    PlacementComponent,
    InternComponent,
    NccNssComponent,
    VoluntaryComponent,
  ],
  imports: [CommonModule, PrimengModule, RouterModule.forChild(routes)],
})
export class ActivityModule {}
