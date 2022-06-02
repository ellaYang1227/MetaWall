import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { post, PostService } from '@services/post.service';
import { SwalDefaultService } from '@services/swal-default.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UploadService } from './../../services/upload.service';

let swalPopup: any;
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

  title!: string;
  uploadErrs: string[] = [];
  isUploading = false;
  isAddPostSpinner = false;
  postID!: string | null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private uploadService: UploadService,
    private spinner: NgxSpinnerService,
    private swalDefaultService: SwalDefaultService
  ) {
    swalPopup = SwalDefaultService.prototype.popupDefault;
    swalToast = this.swalDefaultService.toastDefault;
  }

  ngOnInit(): void {
    this.postID = this.route.snapshot.paramMap.get('id');
    this.title = (this.postID ? '編輯' : '張貼') + '動態';
    if (this.postID) {
      this.postService.getPost(this.postID).subscribe(data => {
        this.spinner.hide();

        if (data) {
          this.post.content = data.content;
          this.post.image = data.image;
        } else {
          swalPopup.fire({
            title: '系統訊息',
            text: '找不到此貼文',
            icon: 'error',
            showCloseButton: false,
            showConfirmButton: false
          }).then((result: any) => {
            window.history.back();
          });
        }
      });
    } else {
      this.spinner.hide();
    }
  }

  upload(event: any) {
    this.uploadErrs.length = 0;

    if (event.target.files.length === 1) {
      const file = event.target.files[0];

      // 檔案格式
      if (file.name.search(/\.(jpg|png)$/i) === -1) {
        this.uploadErrs.push('圖片格式錯誤，僅限 JPG、PNG 圖片');
      }

      // 檔案大小(2mb 以下) - bytes 轉 mb
      if ((file.size / 1024 / 1024) > 2) {
        this.uploadErrs.push('圖片檔案過大，僅限 2mb 以下檔案');
      }

      if (!this.uploadErrs.length) {
        this.isUploading = true;
        this.uploadService.upload(file).subscribe(res => {
          if (res.success) {
            this.post.image = res.data;
          } else {
            this.uploadErrs.push(res.message);
          }

          this.isUploading = false;
        });
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

  // 新增 或編輯 貼文
  addOrEditPost() {
    this.isAddPostSpinner = true;
    if (!this.postID) {
      this.postService.addPost(this.post).subscribe(res => {
        if (res) { this.setSwalToast(res.success, '新增貼文') }
      });
    } else {
      this.postService.editPost(this.postID, this.post).subscribe(res => {
        if (res) { this.setSwalToast(res.success, '編輯貼文') }
      });
    }
  }

  setSwalToast(success: boolean, activity: '新增貼文' | '編輯貼文') {
    swalToast.fire({
      icon: `${success ? 'success' : 'error'}`,
      title: `${activity}${success ? '成功' : '失敗'}`
    }).then((result: any) => {
      this.isAddPostSpinner = false;
      if (success) { this.router.navigate(['/index']) }
    });
  }
}
