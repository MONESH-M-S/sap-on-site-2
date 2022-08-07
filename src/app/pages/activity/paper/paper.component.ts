import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaperMarkData } from './data/paper-mark.data';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.scss'],
})
export class PaperComponent implements OnInit {
  paperForm: FormGroup;
  type = ['Inside KEC', 'Outside KEC'];
  availableModes = ['Online', 'Offline'];
  availablePosition = PaperMarkData.exportClass();
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
    this.paperForm.patchValue({ mark: event.value.mark });
    this.paperForm.get('mark').updateValueAndValidity();
  }

  onUpload(event: Event) {}

  onFormSubmitted() {
    this.isLoading = true;
  }

  private _initForm() {
    this.paperForm = this.formBuilder.group({
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
