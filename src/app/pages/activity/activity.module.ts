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
import { VacComponent } from './vac/vac.component';

const routes: Routes = [
  {
    path: '',
    component: ActivityComponent,
    children: [
      { path: 'paper', component: PaperComponent, outlet: 'activitiesRoute' },
      {
        path: 'project',
        component: ProjectComponent,
        outlet: 'activitiesRoute',
      },
      { path: 'club', component: ClubComponent, outlet: 'activitiesRoute' },
      {
        path: 'workshop',
        component: WorkshopComponent,
        outlet: 'activitiesRoute',
      },
      { path: 'nptel', component: NptelComponent, outlet: 'activitiesRoute' },
      { path: 'vac', component: VacComponent, outlet: 'activitesRoute' },
      {
        path: 'techno-managerial',
        component: TechnoManagerialComponent,
        outlet: 'activitesRoute',
      },
      { path: 'ncc-nss', component: NccNssComponent, outlet: 'activitesRoute' },
      {
        path: 'project-paper',
        component: ProjectPaperComponent,
        outlet: 'activitesRoute',
      },
      { path: 'sports', component: SportsComponent, outlet: 'activitesRoute' },
      {
        path: 'voluntary',
        component: VoluntaryComponent,
        outlet: 'activitesRoute',
      },
    ],
  },
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
    VacComponent,
  ],
  imports: [CommonModule, PrimengModule, RouterModule.forChild(routes)],
})
export class ActivityModule {}
