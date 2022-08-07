import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '@models/login';
import { AuthService } from '@service/auth/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoading = false;

  constructor(
    private messageService: MessageService,
    private router: Router,
    private authService: AuthService
  ) {}

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

    const login: Login = {
      email: form.value.email,
      password: form.value.password,
      rememberMe: form.value.remember,
    };

    this.authService.login(login).subscribe((res) => {
      if (res.user === null && res.mentor === null) {
        this.isLoading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: res.message,
        });
      } else {
        if (res.user==null&& res.mentor!=null ) {
          this.router.navigate([`m/${res.mentor.id}`]);
        } else {
          this.router.navigate([`s/${res.user.id}`]);
        }
        this.isLoading = false;
      }
    });
  }
}
