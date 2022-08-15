import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '@service/activity/activity.service';
import { ActivityData } from '../../data/activity.data';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  userId: string;
  activities: { label: string; route: string }[] = ActivityData.exportData();

  constructor(public location: Location, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.userId = res.id;
    });
  }
}
