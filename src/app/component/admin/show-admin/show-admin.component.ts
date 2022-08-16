import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@models/user';

@Component({
  selector: 'app-show-admin',
  templateUrl: './show-admin.component.html',
  styleUrls: ['./show-admin.component.scss'],
})
export class ShowAdminComponent implements OnInit {
  availableMentors: User[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((res) => {
      if (res.mentors.users.length > 0) {
        this.availableMentors = res.mentors.users;
      }
    });
  }
}
