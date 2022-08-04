import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
})
export class SportsComponent implements OnInit {
  sportsForm: FormGroup;
  eventLevel = ['State', 'Interzone', 'National', 'International'];
  placedPosition = [
    '1st Position',
    '2nd Position',
    '3rd Position',
    '4th Position',
    'Participated',
  ];
  imageDisplay?: string;
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initForm();
  }

  onUpload(event: Event) {}

  onFormSubmitted() {
    this.isLoading = true;
  }

  private _initForm() {
    this.sportsForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      eventVenue: ['', Validators.required],
      sportName: ['', Validators.required],
      level: ['', Validators.required],
      position: ['', Validators.required],
      eventDateRange: ['', Validators.required],
      prizeAmount: [''],
      mark: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
}
