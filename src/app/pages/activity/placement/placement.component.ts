import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlacementMarkData } from './data/placement-mark.data';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.scss'],
})
export class PlacementComponent implements OnInit {
  placementForm: FormGroup;
  placedType = PlacementMarkData.exportClass();
  imageDisplay?: string;
  isLoading: boolean = false;
  notPlaced: boolean = false;
  data: { label: string; mark: number };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initForm();
  }

  onUpload(event: Event) {}

  onPositionChange(event: any) {
    if (event.value.label == 'Not Placed Cleared Rounds') {
      this.notPlaced = true;
    } else {
      this.notPlaced = false;
    }

    this.data = event.value;
    this.placementForm.patchValue({ mark: event.value.mark });
    this.placementForm.get('mark').updateValueAndValidity();
  }

  onFormSubmitted() {}

  private _initForm() {
    this.placementForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      companyLocation: ['', Validators.required],
      placedType: ['', Validators.required],
      placedDate: [new Date(), Validators.required],
      roundsShortListed: [
        '',
        [Validators.required, Validators.min(1), Validators.max(5)],
      ],
      mark: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
}
