import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Mark } from '@models/mark';
import { MarkService } from '@service/mark/mark.service';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userId!: string;
  userDetail!: User;
  markDetail: Mark;
  markNeeded: boolean = false;
  totalMark: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private markService: MarkService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((res) => {
      if (res.userData.user !== null) {
        this.userDetail = res.userData.user;
        this.userId = res.userData.user.id;
        this.markService.getMarkByUserId(this.userId).subscribe((res) => {
          if (res.mark != null) {
            this.markDetail = res.mark[0];
            this.totalMark = 100 - this.markDetail?.total;
            if (this.totalMark <= 0) {
              this.markNeeded = false;
            } else {
              this.markNeeded = true;
            }
          }
        });
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  // openViewActivityDialog() {
  //   this.dialog.open(UploadActivityDialogComponent, {
  //     data: { id: this.userId },
  //     hasBackdrop: true,
  //     disableClose: true,
  //   });
  // }

  navigateToEditPage() {
    this.router.navigate([`s/${this.userId}/edit-detail`], {
      queryParams: { edit: true },
    });
  }

  // deleteActivity(id: string) {
  //   let dialogRef = this.dialog.open(DeleteConformationDialogComponent, {
  //     hasBackdrop: true,
  //   });

  //   dialogRef.afterClosed().subscribe((res) => {
  //     if (res === 'Delete') {
  //       this.userService.deleteActivityById(id).subscribe((res) => {
  //         if (res.message === 'Activity deleted successfully!') {
  //           this.messageService.add({
  //             severity: 'success',
  //             summary: 'Success',
  //             detail: res.message,
  //           });
  //           this._getActivities(this.userId);
  //         } else {
  //           this.messageService.add({
  //             severity: 'error',
  //             summary: 'Error',
  //             detail: res.message,
  //           });
  //           this._getActivities(this.userId);
  //         }
  //       });
  //     }
  //   });
  // }

  // private _getActivities(id: string) {
  //   this.userService.getStudentActivitiesById(id).subscribe((res) => {
  //     if (res.activites.length > 0) {
  //       this.userActivity = res.activites;
  //     } else {
  //       this.userActivity = [];
  //     }
  //   });
  // }

  openActivityUploadPage() {
    this.router.navigate([`/s/a/${this.userId}/paper`], {
      queryParams: { userId: this.userId },
    });
  }
}
