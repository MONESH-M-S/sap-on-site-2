import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

export interface Login {
  email: string;
  password: string;
  remember?: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoading = false;

  constructor(private messageService: MessageService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.isLoading = true;
    if (form.invalid) {
      this.isLoading = false;
      return this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please enter a valid details',
      });
    } else if (!form.value.email.endsWith('@kongu.edu')) {
      this.isLoading = false;
      return this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please enter a vaild kongu email',
      });
    }

    // this.homeService
    //   .login(form.value.email, form.value.password)
    //   .subscribe((res) => {
    //     if (res.user === null) {
    //       this.isLoading = false;
    //       this.messageService.add({
    //         severity: 'error',
    //         summary: 'Error',
    //         detail: res.message,
    //       });
    //     } else {
    //       if (res.user.type == 'mentor') {
    //         this.router.navigate([`m/${res.user.mentorId.name}`]);
    //       } else {
    //         this.router.navigate([`s/${res.user.userId}`]);
    //       }
    //       this.isLoading = false;
    //     }
    //   });
  }
}
