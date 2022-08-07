import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SportsMarkData } from './data/sports-mark.data';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
})
export class SportsComponent implements OnInit {
  sportsForm: FormGroup;
  availaleLevelWithPrize = SportsMarkData.exportClass();
  placedPosition = [
    '1st Position',
    '2nd Position',
    '3rd Position',
    '4th Position',
    'Participated',
  ];
  imageDisplay?: string;
  isLoading: boolean = false;
  data: { label: string; mark: number };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initForm();
  }

  onUpload(event: Event) {}

  onFormSubmitted() {
    this.isLoading = true;
  }

  onLevelChange(event: any) {
    this.data = event.value;
    this.sportsForm.patchValue({ mark: event.value.mark });
    this.sportsForm.get('mark').updateValueAndValidity();
  }

  private _initForm() {
    this.sportsForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      eventVenue: ['', Validators.required],
      sportName: ['', Validators.required],
      eventLevel: ['', Validators.required],
      position: ['', Validators.required],
      eventDateRange: ['', Validators.required],
      prizeAmount: [''],
      mark: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
}
