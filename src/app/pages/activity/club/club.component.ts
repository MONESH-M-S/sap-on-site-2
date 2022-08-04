import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClubMarkData } from './data/club-mark.data';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss'],
})
export class ClubComponent implements OnInit {
  clubForm: FormGroup;
  availalePositions = ClubMarkData.exportClass();
  imageDisplay?: string;
  isLoading: boolean = false;
  data: { label: string; value: number };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initForm();
  }

  onPositionChange(event: any) {
    this.data = event.value;
    this.clubForm.patchValue({ mark: event.value.value });
    this.clubForm.get('mark').updateValueAndValidity();
  }

  onUpload(event: any) {
    console.log(event);
    const file = event.files[0];
    this.clubForm.patchValue({ image: file });
    this.clubForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imageDisplay = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onFormSubmitted() {
    this.isLoading = true;
  }

  private _initForm() {
    this.clubForm = this.formBuilder.group({
      clubName: ['', [Validators.required]],
      position: ['', [Validators.required]],
      mark: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }
}
