import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss'],
})
export class ActivityListComponent implements OnInit {
  userActivity?: Activity[] = [
    {eventName: "Test",mark: 20}
  ];
  constructor() {}

  ngOnInit(): void {}
}
