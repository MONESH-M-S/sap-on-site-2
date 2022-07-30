import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Mentor } from '@models/mentor';
import { User } from '@models/user';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  id: string = '';
  mentorDetail: Mentor = {name: "Abc", email: "abc@gmail.com", department: "EIE"};
  availableStudents: User[] = [
    {name: "lorem", rollno: "19eir000", year: "4th year"},
    {name: "lorem", rollno: "20eir000", year: "3rd year"},
    {name: "lorem", rollno: "21eir000", year: "2nd year"},
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   if (params['name']) {
    //     this.id = params['name'];
    //     this.mentorService
    //       .getMentorDetailsByName(params['name'])
    //       .subscribe((res) => {
    //         if (res.mentor != null) {
    //           this.mentorDetail = res.mentor;
    //           this.mentorService
    //             .getStudentsListByMentorName(params['name'])
    //             .subscribe((res) => {
    //               if (res.users != null) {
    //                 this.availableStudents = res.users;
    //               } else {
    //                 this.messageService.add({
    //                   severity: 'info',
    //                   summary: 'Note',
    //                   detail: res.message,
    //                 });
    //               }
    //             });
    //         } else {
    //           this.router.navigate(['/home']);
    //         }
    //       });
    //   }
    // });
  }

  onCardClicked(id?: string) {
    this.router.navigate([`m/s/${id}`]);
  }

  openChangePasswordDialog() {
    // let dialogRef1 = this.dialog.open(ChangePasswordDialogComponent, {
    //   width: '350px',
    //   hasBackdrop: true,
    // });

    // dialogRef1.afterClosed().subscribe((result) => {
    //   console.log(result);

    //   let dialogRef2 = this.dialog.open(NewPasswordDialogComponent, {
    //     width: '350px',
    //     hasBackdrop: true,
    //   });

    //   dialogRef2.afterClosed().subscribe((result) => {
    //     console.log(result);
    //   });
    // });
  }

  openAddAdminDialog() {
    // let dialogRef = this.dialog.open(AddMentorComponent, {
    //   width: '500px',
    //   height: '500px',
    //   hasBackdrop: true,
    //   disableClose: true,
    // });
    // dialogRef.afterClosed().subscribe((result) => {});
  }

}
