import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@models/user';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent implements OnInit {
  showMarkTable: boolean = false;
  studentDetail: User;
  studentId: string;

  constructor(
    public location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((res) => {
      if (res.userData.user != null) {
        this.studentDetail = res.userData.user;
        this.studentId = res.userData.user.id;
      }
    });
  }

  openMailDailog() {}
}
