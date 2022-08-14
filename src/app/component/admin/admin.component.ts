import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentData } from 'src/app/data/department.data';
import { User } from '@models/user';
import { MessageService } from 'primeng/api';
import { AuthService } from '@service/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  id: string;
  mentorDetail: User = {
    name: 'Abc',
    email: 'abc@gmail.com',
    department: 'EIE',
  };
  availableStudents: User[] = [
    { name: 'lorem', rollno: '19eir000', year: '4th year', id: '123' },
    { name: 'lorem', rollno: '20eir000', year: '3rd year', id: '123' },
    { name: 'lorem', rollno: '21eir000', year: '2nd year', id: '234' },
  ];
  openDialog: boolean = false;
  addMentorForm: FormGroup;
  isLoading: boolean = false;
  availableDepartments = DepartmentData.exportClass();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.id = params['id'];
        // this.mentorService
        //   .getMentorDetailsByName(params['name'])
        //   .subscribe((res) => {
        //     if (res.mentor != null) {
        //       this.mentorDetail = res.mentor;
        //       this.mentorService
        //         .getStudentsListByMentorName(params['name'])
        //         .subscribe((res) => {
        //           if (res.users != null) {
        //             this.availableStudents = res.users;
        //           } else {
        //             this.messageService.add({
        //               severity: 'info',
        //               summary: 'Note',
        //               detail: res.message,
        //             });
        //           }
        //         });
        //     } else {
        //       this.router.navigate(['/home']);
        //     }
        //   });
      }
    });
    this._initForm();
  }

  onCardClicked(id: string) {
    this.router.navigate([`m/${this.id}/s/${id}`]);
  }

  openChangePasswordDialog() {}

  onSubmit() {
    if (this.addMentorForm.invalid) return;

    this.isLoading = true;
    const mentor = {
      name: this.addMentorForm.get('name').value,
      department: this.addMentorForm.get('department').value,
      email: this.addMentorForm.get('email').value,
      password: this.addMentorForm.get('password').value,
      isAdmin: this.addMentorForm.get('isAdmin').value,
      addedAdmin: this.id,
    };

    this.authService.addMentor(mentor).subscribe((res) => {
      this.isLoading = false;
      this.openDialog = false;
      if (res.user != null) {
        return this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `Admin '${res.user.name}' added successfully!`,
        });
      } else {
        return this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: res.message,
        });
      }
    });
  }

  private _initForm() {
    this.addMentorForm = this.formBuilder.group({
      name: ['', Validators.required],
      department: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      isAdmin: [false],
    });
  }
}
