import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from '@models/activity';
import { ActivityService } from '@service/activity/activity.service';
import { MarkService } from '@service/mark/mark.service';
import { ConfirmationService, MessageService } from 'primeng/api';

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
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private markService: MarkService
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

  updateLockStatus(id: string, status: boolean) {
    let lockStatus: string;
    status ? (lockStatus = 'Unlock') : (lockStatus = 'Lock');
    this.confirmationService.confirm({
      target: event.target,
      message: `Are you sure that you want to ${lockStatus} this activity?`,
      accept: () => {
        this.activityService.updateLockStatus(id, status).subscribe((res) => {
          if (res.success) {
            this.activityService.getUserActivityByUserId(this.studentId);
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: res.message,
            });
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

  deleteActivity(event: Event, id: string) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to proceed?',
      accept: () => {
        this.activityService.deleteActivity(id).subscribe((res) => {
          if (res.success) {
            this.activityService.getUserActivityByUserId(this.studentId);
            this.markService
              .updateMark(
                this.studentId,
                -res.activity.mark,
                res.activity.activity_type
              )
              .subscribe((result) => {
                if (result.success) {
                  this.markService.getMarkByUserId(this.studentId);
                  this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: res.message,
                  });
                } else {
                  this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: res.message,
                  });
                }
              });
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
