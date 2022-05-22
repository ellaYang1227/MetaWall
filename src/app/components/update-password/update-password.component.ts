import { Component, Input, OnInit } from '@angular/core';
import { FormsSchema } from '@data/forms-schema';
import { MemberService, updatePassword } from '@services/member.service';
import { SwalDefaultService } from '@services/swal-default.service';
import { NgxSpinnerService } from 'ngx-spinner';

let swalToast: any;

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
  formsSchema = FormsSchema;
  data: updatePassword = {
    newPassword: '',
    confirmPassword: ''
  }

  @Input() title!: string;

  constructor(
    private memberService: MemberService,
    private spinner: NgxSpinnerService,
    private swalDefaultService: SwalDefaultService,
  ) {
    swalToast = this.swalDefaultService.toastDefault;
    this.spinner.hide();
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.spinner.show();
    this.memberService.updatePassword(this.data).subscribe(res => {
      this.spinner.hide();
      if (res) {
        swalToast.fire({
          icon: `${res.success ? 'success' : 'error'}`,
          title: `密碼修改${res.success ? '成功' : '失敗'}`
        }).then((result: any) => {
          if (!res.success) {
            this.data.newPassword = '';
            this.data.confirmPassword = '';
          }
        });
      }
    });
  }
}
