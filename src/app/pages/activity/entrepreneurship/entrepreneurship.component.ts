import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntrepreneurshipMarkData } from './data/entrepreneurship-data.mark';

@Component({
  selector: 'app-entrepreneurship',
  templateUrl: './entrepreneurship.component.html',
  styleUrls: ['./entrepreneurship.component.scss'],
})
export class EntrepreneurshipComponent implements OnInit {
  entrepreneurshipForm: FormGroup;
  imageDisplay?: string;
  availableType = EntrepreneurshipMarkData.exportClass();
  isLoading: boolean = false;
  data: { label: string; mark: number };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initForm();
  }

  onImageUpload(event: any) {
    const file = event.files[0];
    this.entrepreneurshipForm.patchValue({ image: file });
    this.entrepreneurshipForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imageDisplay = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onFormSubmitted() {
    this.isLoading = true;
  }

  onTypeChanged(event: any) {
    this.data = event.value;
    this.entrepreneurshipForm.patchValue({ mark: event.value.mark });
    this.entrepreneurshipForm.get('mark').updateValueAndValidity();
  }

  private _initForm() {
    this.entrepreneurshipForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      eventVenue: ['', Validators.required],
      workshopName: ['', Validators.required],
      mode: ['', Validators.required],
      eventDateRange: ['', Validators.required],
      mark: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
}
