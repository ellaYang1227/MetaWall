import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { post, PostService } from '@services/post.service';
import { SwalDefaultService } from '@services/swal-default.service';
import { NgxSpinnerService } from 'ngx-spinner';

let swalToast: any;

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  post: post = {
    content: '',
    image: ''
  };

  uploadErrs: string[] = [];

  constructor(
    private router: Router,
    private postService: PostService,
    private spinner: NgxSpinnerService,
    private swalDefaultService: SwalDefaultService
  ) {
    this.spinner.hide();
    swalToast = this.swalDefaultService.toastDefault;
  }

  ngOnInit(): void {
  }

  upload(event: any) {
    this.uploadErrs.length = 0;

    if (event.target.files.length === 1) {
      const file = event.target.files[0];

      // 檔案格式
      if (file.name.search(/\.(jpg|png)$/i) === -1) {
        this.uploadErrs.push('圖片格式錯誤，僅限 JPG、PNG 圖片');
      }

      // 檔案大小(1mb 以下) - bytes 轉 mb
      if ((file.size / 1024 / 1024) > 1) {
        this.uploadErrs.push('圖片檔案過大，僅限 1mb 以下檔案');
      }

      if (!this.uploadErrs.length) {
        const fileReader = new FileReader();
        fileReader.onloadend = () => { this.post.image = fileReader.result }
        fileReader.readAsDataURL(file);
      }
    }
  }

  // 刪除圖片
  delImage() {
    this.uploadErrs.length = 0;
    this.post.image = '';
  }

  trackByFn(index: number, item: string) {
    return item;
  }

  // 新增貼文
  addPost() {
    this.spinner.show();
    this.postService.addPost(this.post).subscribe(res => {
      this.spinner.hide();
      if (res) {
        swalToast.fire({
          icon: `${res.success ? 'success' : 'error'}`,
          title: `新增貼文${res.success ? '成功' : '失敗'}`
        }).then((result: any) => {
          if (res.success) { this.router.navigate(['/index']) }
        });
      }
    });
  }
}
