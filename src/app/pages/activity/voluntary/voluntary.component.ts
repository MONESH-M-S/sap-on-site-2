import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-voluntary',
  templateUrl: './voluntary.component.html',
  styleUrls: ['./voluntary.component.scss'],
})
export class VoluntaryComponent implements OnInit {
  voluntaryForm: FormGroup;
  imageDisplay?: string;
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initForm();
  }

  onUpload(event: Event) {}

  onFormSubmitted() {}

  private _initForm() {
    this.voluntaryForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      eventVenue: ['', Validators.required],
      activityDone: ['', Validators.required],
      eventDate: [new Date(), Validators.required],
      mark: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
}
