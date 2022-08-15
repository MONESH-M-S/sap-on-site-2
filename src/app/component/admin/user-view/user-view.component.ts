import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mark } from '@models/mark';
import { User } from '@models/user';
import { MarkService } from '@service/mark/mark.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent implements OnInit {
  showMarkTable: boolean = false;
  studentDetail: User;
  studentId: string;
  markDetails?: Mark;
  markNeeded: boolean;
  totalMark: number;

  constructor(
    public location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private markService: MarkService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((res) => {
      if (res.userData.user != null) {
        this.studentDetail = res.userData.user;
        this.studentId = res.userData.user.id;
        this.markService.getMarkByUserId(this.studentId).subscribe((res) => {
          if (res.mark != null) {
            this.markDetails = res.mark[0];
            this.totalMark = 100 - this.markDetails?.total;
            if (this.totalMark <= 0) {
              this.markNeeded = false;
            } else {
              this.markNeeded = true;
            }
          }
        });
      }
    });
  }

  openMailDailog() {}
}
