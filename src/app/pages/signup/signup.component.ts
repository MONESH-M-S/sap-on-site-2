import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@service/auth/auth.service';
import { UserService } from '@service/user/user.service';
import { MessageService } from 'primeng/api';
import { DepartmentData } from 'src/app/data/department.data';
import { MentorData } from 'src/app/data/mentor.data';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  userId!: string;
  signupForm!: FormGroup;
  imageDisplay =
    'assets/images/streamlinehq-avatar-neutral-frame-add-users-400.png';
  year = ['1st year', '2nd year', '3rd year', '4th year'];
  availaleMentors = MentorData.exportClass();
  availableDepartments = DepartmentData.exportClass();
  //userDetail: User;
  userDetail: any;
  editMode = false;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.userId = params['id'];
        this.route.queryParams.subscribe((queryParams) => {
          if (queryParams['edit'] === 'true') {
            this.editMode = true;
            this.userService
              .getUserDetailById(params['id'])
              .subscribe((res) => {
                if (res.user != null) {
                  this.userDetail = res.user;
                  this._initFormWithData();
                  this.imageDisplay = this.userDetail.image;
                } else {
                  this.router.navigate(['/home']);
                }
              });
          }
        });
      } else {
        this._initFormAsNull();
        this.editMode = false;
      }
    });
  }

  onUpload(event: any) {
    const file = event.files[0];
    this.signupForm.patchValue({ image: file });
    this.signupForm.get('image')!.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imageDisplay = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    if (!this.signupForm.value.email.endsWith('@kongu.edu')) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please enter a vaild kongu email',
      });
    }

    if (this.signupForm.invalid) return;

    this.isLoading = true;

    const user = new FormData();
    user.append('name', this.signupForm.value.name);
    user.append('email', this.signupForm.value.email);
    user.append('password', this.signupForm.value.password);
    user.append('rollNo', this.signupForm.value.rollno);
    user.append('department', this.signupForm.value.department);
    user.append('year', this.signupForm.value.year);
    user.append('mentor', this.signupForm.value.mentor);
    user.append('image', this.signupForm.value.image);

    this.authService.userSignup(user).subscribe((res) => {
      if (res.user != null) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res.message,
        });
        window.setTimeout(() => {
          this.isLoading = false;
          this.router.navigate([`s/${res.user.id}`]);
        }, 1500);
      } else {
        this.isLoading = false;
        return this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: res.message,
        });
      }
    });
  }

  private _initFormAsNull() {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      rollno: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8),
        ]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      department: ['', Validators.required],
      mentor: ['', Validators.required],
      year: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  private _initFormWithData() {
    console.log(this.userDetail)
    if (this.editMode == true) {
      this.signupForm = this.formBuilder.group({
        name: [this.userDetail.name, [Validators.required]],
        email: [this.userDetail.email, [Validators.required, Validators.email]],
        rollno: [
          this.userDetail.roll_no,
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(8),
          ]),
        ],
        password: [
          '',
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
        department: [this.userDetail.department, Validators.required],
        mentor: [this.userDetail.mentor, Validators.required],
        year: [this.userDetail.year, Validators.required],
      });
    }
  }
}
