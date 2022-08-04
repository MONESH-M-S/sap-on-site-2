import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-paper',
  templateUrl: './project-paper.component.html',
  styleUrls: ['./project-paper.component.scss'],
})
export class ProjectPaperComponent implements OnInit {
  projectToPaperForm: FormGroup;
  availablePublishment = [
    'SCI Indexed',
    'WOS/SCOPUS Indexed Journal/Conference',
    'Other Journals/Conferences',
    'Patent',
    'Copyright',
    'NIL',
  ];
  imageDisplay?: string;
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._initForm();
  }

  onUpload(event: Event) {}

  onFormSubmitted() {}

  private _initForm() {
    this.projectToPaperForm = this.formBuilder.group({
      projectTitle: ['', Validators.required],
      projectGuide: ['', Validators.required],
      projectMode: ['', Validators.required],
      publishedIn: ['', Validators.required],
      projectSubmittedDate: [new Date(), Validators.required],
      projectPublishedDate: [new Date(), Validators.required],
      title: ['', Validators.required],
      journalName: ['', Validators.required],
      authors: ['', Validators.required],
      journalDetail: ['', Validators.required],
      issnNumber: ['', Validators.required],
      doiNumber: ['', Validators.required],
      mark: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
}
