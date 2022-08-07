import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GovtExamMarkData } from './data/govt-exam-mark.data';

@Component({
  selector: 'app-govt-exam',
  templateUrl: './govt-exam.component.html',
  styleUrls: ['./govt-exam.component.scss'],
})
export class GovtExamComponent implements OnInit {
  govtForm: FormGroup;
  imageDisplay?: string;
  availableType = GovtExamMarkData.exportClass();
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

  onTypeChanged(event: any) {
    this.data = event.value;
    this.govtForm.patchValue({ mark: event.value.mark });
    this.govtForm.get('mark').updateValueAndValidity();
  }

  private _initForm() {
    this.govtForm = this.formBuilder.group({
      examName: ['', Validators.required],
      examVenue: ['', Validators.required],
      examLevel: ['', Validators.required],
      eventDate: ['', Validators.required],
      mark: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
}