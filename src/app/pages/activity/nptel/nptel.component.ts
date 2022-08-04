import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nptel',
  templateUrl: './nptel.component.html',
  styleUrls: ['./nptel.component.scss'],
})
export class NptelComponent implements OnInit {
  nptelForm: FormGroup;
  imageDisplay?: string;
  courseDuration = ['4 week', '8 week', '12 week'];
  data = ['Yes', 'No'];
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
    this.nptelForm = this.formBuilder.group({
      registraionNumber: ['', Validators.required],
      courseCode: ['', Validators.required],
      courseName: ['', Validators.required],
      hostInstitution: ['', Validators.required],
      organizationName: ['', Validators.required],
      courseDuration: ['', Validators.required],
      credit: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
      creditTransfer: ['', Validators.required],
      mark: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
}
