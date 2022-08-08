import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NptelMarkData } from './data/nptel-data.mark';

@Component({
  selector: 'app-nptel',
  templateUrl: './nptel.component.html',
  styleUrls: ['./nptel.component.scss'],
})
export class NptelComponent implements OnInit {
  nptelForm: FormGroup;
  imageDisplay?: string;
  courseDuration = ['4 week', '8 week', '12 week'];
  type = ['Yes', 'No'];
  availableCredit = NptelMarkData.exportClass();
  isLoading: boolean = false;
  data: { label: string; mark: number };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initForm();
  }

  onImageUpload(event: any) {
    const file = event.files[0];
    this.nptelForm.patchValue({ image: file });
    this.nptelForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imageDisplay = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onFormSubmitted() {
    this.isLoading = true;
  }

  onCreditChanged(event: any) {
    this.data = event.value;
    this.nptelForm.patchValue({ mark: event.value.mark });
    this.nptelForm.get('mark').updateValueAndValidity();
  }

  private _initForm() {
    this.nptelForm = this.formBuilder.group({
      registraionNumber: ['', Validators.required],
      courseCode: ['', Validators.required],
      courseName: ['', Validators.required],
      hostInstitution: ['', Validators.required],
      organizationName: ['', Validators.required],
      credit: ['', Validators.required],
      creditTransfer: ['', Validators.required],
      mark: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
}
