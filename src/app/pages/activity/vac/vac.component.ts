import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vac',
  templateUrl: './vac.component.html',
  styleUrls: ['./vac.component.scss'],
})
export class VacComponent implements OnInit {
  vacForm: FormGroup;
  imageDisplay?: string;
  mode = ['Online', 'Offline'];
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
    this.vacForm = this.formBuilder.group({
      courseName: ['', Validators.required],
      coursePlatform: ['', Validators.required],
      mode: ['', Validators.required],
      courseDateRange: ['', Validators.required],
      mark: ['', Validators.required],
      image: ['', Validators.required]
    })
  }
}
