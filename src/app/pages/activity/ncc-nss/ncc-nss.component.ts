import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ncc-nss',
  templateUrl: './ncc-nss.component.html',
  styleUrls: ['./ncc-nss.component.scss'],
})
export class NccNssComponent implements OnInit {
  nccForm: FormGroup;
  imageDisplay?: string;
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
    this.nccForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      eventVenue: ['', Validators.required],
      position: [''],
      dateRange: ['', Validators.required],
    });
  }
}
