import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkService } from '@service/mark/mark.service';

@Component({
  selector: 'app-mark-table',
  templateUrl: './mark-table.component.html',
  styleUrls: ['./mark-table.component.scss'],
})
export class MarkTableComponent implements OnInit {
  studentActivityMarks = [];

  constructor(
    private markService: MarkService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      if (res['id']) {
        this.markService.getMarkByUserId(res['id']).subscribe((res) => {
          Object.keys(res.mark[0]).forEach((key) => {
            if (
              key == '_id' ||
              key == 'id' ||
              key == 'uploader_id' ||
              key == 'createdAt' ||
              key == 'updatedAt' ||
              key == '__v'
            ) {
            } else {
              this.studentActivityMarks.push({
                event: key,
                mark: res.mark[0][key],
              });
            }
          });
        });
      }
    });
  }
}
