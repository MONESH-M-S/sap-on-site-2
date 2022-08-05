import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-techno-managerial',
  templateUrl: './techno-managerial.component.html',
  styleUrls: ['./techno-managerial.component.scss'],
})
export class TechnoManagerialComponent implements OnInit {
  technoForm: FormGroup;
  data = ['Inside KEC', 'Outside KEC'];
  eventLevel = ['State', 'National', 'International'];
  imageDisplay?: string;
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initForm();
  }

  onUpload(event: Event) {}

  onFormSubmitted() {}

  private _initForm() {
    this.technoForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      eventVenue: ['', Validators.required],
      type: ['', Validators.required],
      title: ['', Validators.required],
      eventLevel: ['', Validators.required],
      eventDate: [new Date(), Validators.required],
      prizeAmount: [''],
      mark: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
}
