import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mark-table',
  templateUrl: './mark-table.component.html',
  styleUrls: ['./mark-table.component.scss'],
})
export class MarkTableComponent implements OnInit {
  studentActivityMarks = [];
  constructor() {}

  ngOnInit(): void {}
}
