import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from '@models/activity';
import { ActivityService } from '@service/activity/activity.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss'],
})
export class ActivityListComponent implements OnInit {
  userActivity?: Activity[] = [];
  userId: string;

  constructor(
    private activityService: ActivityService,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      if (res['id']) {
        this.userId = res['id'];
        this.activityService.getUserActivityByUserId(res['id']);
        this.activityService.getUserUpdatedActivity().subscribe((res) => {
          this.userActivity = res;
        });
      }
    });
  }

  viewActivity(id: string) {
    this.router.navigate([`view-a/s/${id}`], {
      queryParams: { userId: this.userId },
    });
  }

  deleteActivity(event: Event, id: string) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to proceed?',
      accept: () => {
        this.activityService.deleteActivity(id).subscribe((res) => {
          if (res.success) {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: res.message,
            });
            this.activityService.getUserActivityByUserId(id);
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: res.message,
            });
          }
        });
      },
      reject: () => {},
    });
  }
}
