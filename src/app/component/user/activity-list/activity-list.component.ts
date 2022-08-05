import { Component, OnInit } from '@angular/core';
import { Activity } from '@models/activity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss'],
})
export class ActivityListComponent implements OnInit {
  userActivity?: Activity[] = [];
  constructor() {}

  ngOnInit(): void {}
}
