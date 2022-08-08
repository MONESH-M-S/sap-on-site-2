import { Component, OnInit } from '@angular/core';
import { Activity } from '@models/activity';

@Component({
  selector: 'app-activity-table',
  templateUrl: './activity-table.component.html',
  styleUrls: ['./activity-table.component.scss']
})
export class ActivityTableComponent implements OnInit {
  studentActivitiesList: Activity[] = [];
  studentId: string;
  constructor() { }

  ngOnInit(): void {
  }

}
