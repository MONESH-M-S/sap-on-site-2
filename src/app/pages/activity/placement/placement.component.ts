import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.scss'],
})
export class PlacementComponent implements OnInit {
  placementForm: FormGroup;
  data = ['Placed with Internship', 'Placed without Internship'];
  imageDisplay?: string;
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initForm();
  }

  onUpload(event: Event) {}

  onFormSubmitted() {}

  private _initForm() {
    this.placementForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      companyLocation: ['', Validators.required],
      placedType: ['', Validators.required],
      placedDate: [new Date(), Validators.required],
      roundsShortListed: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      mark: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
}
