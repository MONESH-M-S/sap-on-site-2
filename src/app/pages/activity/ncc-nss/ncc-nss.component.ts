import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NccNssMarkData } from './data/ncc-nss-data.mark';

@Component({
  selector: 'app-ncc-nss',
  templateUrl: './ncc-nss.component.html',
  styleUrls: ['./ncc-nss.component.scss'],
})
export class NccNssComponent implements OnInit {
  nccForm: FormGroup;
  imageDisplay?: string;
  isLoading: boolean = false;
  availableMarks = NccNssMarkData.exportClass();
  data: { label: string; mark: number };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initForm();
  }

  onUpload(event: Event) {}

  onFormSubmitted() {
    this.isLoading = true;
  }

  onChange(event: any) {
    this.data = event.value;
    this.nccForm.patchValue({ mark: event.value.mark });
    this.nccForm.get('mark').updateValueAndValidity();
  }

  private _initForm() {
    this.nccForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      eventVenue: ['', Validators.required],
      position: [''],
      campRange:['', Validators.required],
      eventDateRange: ['', Validators.required],
      mark: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
}
