import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsSchema } from '@data/forms-schema';
import { AuthService } from '@services/auth.service';
import { editName, MemberService } from '@services/member.service';
import { SwalDefaultService } from '@services/swal-default.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UploadService } from './../../services/upload.service';

let swalToast: any;

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.component.html',
  styleUrls: ['./edit-name.component.scss']
})
export class EditNameComponent implements OnInit {
  userDefaultImg = this.authService.userDefaultImg;
  formsSchema = FormsSchema;
  initData: any = {
    photo: '',
    name: '',
    sex: ''
  };

  data!: editName;
  isUploading = false;
  // 資料是否改變
  isChangeData = false;
  uploadErrs: string[] = [];
  @ViewChild('validateForm', { static: false }) validateForm!: NgForm;

  constructor(
    private authService: AuthService,
    private memberService: MemberService,
    private uploadService: UploadService,
    private swalDefaultService: SwalDefaultService,
    private spinner: NgxSpinnerService
  ) {
    swalToast = this.swalDefaultService.toastDefault;
  }

  ngOnInit(): void {
    this.getProfile();

    // 監聽 input
    setTimeout(() => {
      this.validateForm.valueChanges?.subscribe(valueObj => {
        for (const key in this.initData) {
          this.isChangeData = false;
          if (key !== 'photo' && this.initData[key] !== valueObj[key] ||
            key === 'photo' && this.initData.photo !== this.data.photo) {
            this.isChangeData = true;
            return;
          }
        }
      });
    }, 1000);

  }

  // 取得使用者資料
  getProfile() {
    this.memberService.getProfile().subscribe(data => {
      this.initData.name = data.name;
      this.initData.photo = data.photo;
      this.initData.sex = data.sex;
      this.data = this.copyData(this.initData);
      this.spinner.hide();
    });

  }

  // 複製資料
  copyData(origin: editName): editName {
    return JSON.parse(JSON.stringify(origin));
  }

  // 上傳圖片
  upload(event: any) {
    this.uploadErrs.length = 0;

    if (event.target.files.length === 1) {
      const file = event.target.files[0];

      // 檔案格式
      if (file.name.search(/\.(jpg|png)$/i) === -1) {
        this.uploadErrs.push('圖片格式錯誤，僅限 JPG、PNG 圖片');
      }

      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        const photo: any = fileReader.result;
        const image = new Image();
        image.src = photo;
        image.onload = () => {
          const imageWidth = image.width;
          const imageHeight = image.height;
          // 圖片寬高比 1:1
          if (imageWidth !== imageHeight) {
            this.uploadErrs.push('圖片寬高比必需為 1:1，請重新輸入');
          }

          // 圖片寬度 300px 以上
          if (300 > imageWidth) {
            this.uploadErrs.push('解析度寬度至少 300 像素以上，請重新輸入');
          }

          this.uploadImg(file);
        }
      }

      fileReader.readAsDataURL(file);
    }
  }

  uploadImg(file: FileList) {
    if (!this.uploadErrs.length) {
      this.isUploading = true;
      this.uploadService.upload(file, 'user').subscribe(res => {
        if (res.success) {
          this.data.photo = res.data;
        } else {
          this.uploadErrs.push(res.message);
        }

        this.isUploading = false;
        this.isChangeData = true;
      });
    }
  }

  trackByFn(index: number, item: string) {
    return item;
  }

  submitForm() {
    this.spinner.show();
    this.memberService.updateProfile(this.data).subscribe(res => {
      this.spinner.hide();

      if (res) {
        if (res.success) {
          this.initData = this.copyData(this.data);
          this.isChangeData = false;
          this.authService.changeCookie(res.data.token);
        } else {
          if (Array.isArray(res.message)) {
            this.uploadErrs = res.message;
          } else {
            this.uploadErrs.push(res.message);
          }
        }

        swalToast.fire({
          icon: res.success ? 'success' : 'error',
          title: `更新${res.success ? '成功' : '失敗'}`
        }).then((result: any) => {
          this.uploadErrs.length = 0;
        });
      }
    });
  }
}
