import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Company } from '@data/company';
import { FormsSchema } from '@data/forms-schema';
import { MemberService, signIn } from '@services/member.service';
import { SwalDefaultService } from '@services/swal-default.service';

let swalToast: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  formsSchema = FormsSchema;
  title = '登入';

  data: signIn = {
    email: '',
    password: ''
  }

  resError!: string;

  constructor(
    private titleServer: Title,
    private memberService: MemberService,
    private swalDefaultService: SwalDefaultService
  ) {
    swalToast = this.swalDefaultService.toastDefault;
  }

  ngOnInit(): void {
    this.titleServer.setTitle(`${this.title} | ${Company.name}`);

    if (history.state.email || history.state.password) {
      this.data.email = history.state.email;
      this.data.password = history.state.password;
    }
  }

  submitForm() {
    this.memberService.signIn(this.data).subscribe(res => {
      if (res && !res.success) {
        this.resError = res.message;

        swalToast.fire({
          icon: 'error',
          title: `${this.title}失敗`
        }).then((result: any) => {
          this.resError = '';
        });
      }
    });
  }
}
