import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentData } from 'src/app/data/department.data';
import { User } from '@models/user';
import { MessageService } from 'primeng/api';
import { AuthService } from '@service/auth/auth.service';
import { MentorService } from '@service/mentor/mentor.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  id: string;
  mentorDetail!: User;
  availableStudents: User[] = [];
  openAddAdminDialog: boolean = false;
  openChangePasswordDialog: boolean = false;
  openNewPasswordDialog: boolean = false;
  addMentorForm: FormGroup;
  isLoading: boolean = false;
  availableDepartments = DepartmentData.exportClass();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private mentorService: MentorService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((res) => {
      if (res.userData.user != null) {
        this.mentorDetail = res.userData.user;
        this.id = res.userData.user.id;
      }
      if (res.availableStudents.users) {
        this.availableStudents = res.availableStudents.users;
      }
    });
    this._initForm();
  }

  onCardClicked(id: string, i: number) {
    this.router.navigate([`m/${this.id}/s/${id}`]);
  }

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
      this.openAddAdminDialog = false;
      if (res.user != null) {
        this.addMentorForm.reset();
        this.mentorService
          .addAdmin(res.user.name, res.user.id, res.user.department)
          .subscribe((result) => {
            if (result.message == 'Mentor Updated!') {
              console.log(result);
              return this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: `Admin '${res.user.name}' added successfully!`,
              });
            } else {
              return this.messageService.add({
                severity: 'warn',
                summary: 'Warning',
                detail: `Admin '${res.user.name}' added, but not updated (Contact admin)!`,
              });
            }
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

  checkOldPass(form: NgForm) {
    this.isLoading = true;
    this.mentorService
      .checkOldPassword(form.value.password, this.id)
      .subscribe((res) => {
        if (res.confirmation) {
          this.isLoading = false;
          this.openChangePasswordDialog = false;
          this.openNewPasswordDialog = true;
        } else {
          this.isLoading = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: res.message,
          });
        }
      });
  }

  changeNewPass(form: NgForm) {
    this.isLoading = true;
    this.mentorService
      .updatePassword(form.value.password, this.id)
      .subscribe((res) => {
        if (res.updated) {
          this.openNewPasswordDialog = false;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: res.message + ' You will be redirect to login page!',
          });
          setTimeout(() => {
            this.router.navigate(['/']);
            this.isLoading = false;
          }, 3000);
        } else {
          this.isLoading = false;
          this.messageService.add({
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
