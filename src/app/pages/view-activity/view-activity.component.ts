import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from '@service/activity/activity.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-view-activity',
  templateUrl: './view-activity.component.html',
  styleUrls: ['./view-activity.component.scss'],
})
export class ViewActivityComponent implements OnInit {
  activityDetial: any;
  activityId: string;
  imageName: string;

  constructor(
    public location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private activityService: ActivityService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.activityId = res['id'];
      this.activityService.getActivityById(res['id']).subscribe((res) => {
        if (res.activity != null) {
          this.activityDetial = res.activity;
          const arr = res.activity?.image.split('/');
          this.imageName = arr[arr.length - 1];
        } else {
          this.location.back();
        }
      });
    });
  }

  deleteActivity() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      accept: () => {
        this.activityService
          .deleteActivity(this.activityId)
          .subscribe((res) => {
            if (res.success) {
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: res.message + ' You, will be navigate to back!',
              });
              setTimeout(() => {
                this.location.back();
              }, 3000);
            } else {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: res.message,
              });
            }
          });
      },
      reject: (type) => {},
    });
  }
}
