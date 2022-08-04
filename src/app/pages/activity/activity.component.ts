import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivityData } from './activity.data';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  
  activities: { label: string; route: string }[] = ActivityData.exportData();

  constructor(public location: Location) {}

  ngOnInit(): void {}
}
