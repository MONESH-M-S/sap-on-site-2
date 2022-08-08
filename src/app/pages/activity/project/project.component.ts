import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectMarkData } from './data/project-mark.data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projectForm: FormGroup;
  type = ['Inside KEC', 'Outside KEC'];
  availableModes = ['Online', 'Offline'];
  availablePosition = ProjectMarkData.exportClass();
  isPrizeWon: boolean = false;
  imageDisplay?: string;
  isLoading: boolean = false;
  data: { label: string; prize: boolean; mark: number };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initForm();
  }

  onPositionChange(event: any) {
    if (event.value.prize) {
      this.isPrizeWon = true;
    } else {
      this.isPrizeWon = false;
    }

    this.data = event.value;
    this.projectForm.patchValue({ mark: event.value.mark });
    this.projectForm.get('mark').updateValueAndValidity();
  }

  onImageUpload(event: any) {
    const file = event.files[0];
    this.projectForm.patchValue({ image: file });
    this.projectForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imageDisplay = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onFormSubmitted() {
    this.isLoading = true;
    if (this.projectForm.invalid) return;

    console.log(this.projectForm.value);
  }

  private _initForm() {
    this.projectForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      eventVenue: ['', Validators.required],
      title: ['', Validators.required],
      type: ['', Validators.required],
      eventDate: [new Date(), Validators.required],
      mode: ['', Validators.required],
      position: ['', Validators.required],
      prizeAmount: [''],
      mark: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
}
