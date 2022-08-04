import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.scss'],
})
export class InternComponent implements OnInit {
  internForm: FormGroup;
  data = ['OnCampus', 'OffCampus'];
  imageDisplay?: string;
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initForm();
  }

  onUpload(event: Event) {
    console.log(event);
  }

  onFormSubmitted() {
    this.isLoading = true;
  }

  private _initForm() {
    this.internForm = this.formBuilder.group({
      companyName: ['', [Validators.required]],
      companyLocation: ['', [Validators.required]],
      internType: ['', Validators.required],
      placedDate: [new Date(), Validators.required],
      mark: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
}
