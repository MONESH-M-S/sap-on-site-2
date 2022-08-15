import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from '@models/activity';
import { ActivityService } from '@service/activity/activity.service';

@Component({
  selector: 'app-activity-table',
  templateUrl: './activity-table.component.html',
  styleUrls: ['./activity-table.component.scss'],
})
export class ActivityTableComponent implements OnInit {
  studentActivitiesList: Activity[] = [];
  studentId: string;
  adminId: string;

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.studentId = res['id'];
      this.adminId = res['aid'];
      this.activityService.getUserActivityByUserId(res['id']);
      this.activityService.getUserUpdatedActivity().subscribe((res) => {
        this.studentActivitiesList = res;
      });
    });
  }

  viewActivity(id: string) {
    this.router.navigate([`view-a/a/${id}`], {
      queryParams: { adminId: this.adminId },
    });
  }
}
