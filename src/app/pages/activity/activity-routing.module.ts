import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity.component';
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
import { VacComponent } from './vac/vac.component';
import { VoluntaryComponent } from './voluntary/voluntary.component';
import { WorkshopComponent } from './workshop/workshop.component';

const routes: Routes = [
  {
    path: '',
    component: ActivityComponent,
    children: [
      { path: 'paper', component: PaperComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'club', component: ClubComponent },
      { path: 'workshop', component: WorkshopComponent },
      { path: 'nptel', component: NptelComponent },
      { path: 'vac', component: VacComponent },
      { path: 'techno-managerial', component: TechnoManagerialComponent },
      { path: 'ncc-nss', component: NccNssComponent },
      { path: 'project-paper', component: ProjectPaperComponent },
      { path: 'sports', component: SportsComponent },
      { path: 'placement', component: PlacementComponent },
      { path: 'intern', component: InternComponent },
      { path: 'voluntary', component: VoluntaryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityRoutingModule {}