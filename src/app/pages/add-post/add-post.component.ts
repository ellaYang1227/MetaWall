import { Component, OnInit } from '@angular/core';
import { PageService } from '@services/page.service';
import { post, PostService } from '@services/post.service';

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
    private pageService: PageService,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.pageService['components.header.visible'] = true;
    this.pageService['components.right-nav.visible'] = true;
  }

  upload(event: any) {
    this.uploadErrs.length = 0;

    if (event.target.files.length === 1) {
      const file = event.target.files[0];

      // 檔案格式
      const confirmFormat = file.name.search(/\.(jpg|png)$/i) > -1;
      // 檔案大小 - bytes 轉 mb
      const confirmSize = 1 > (file.size / 1024 / 1024);
      if (confirmFormat && confirmSize) {
        const fileReader = new FileReader();
        fileReader.onloadend = () => { this.post.image = fileReader.result }
        fileReader.readAsDataURL(file);
      } else {
        if (!confirmFormat) { this.addUploadErrs('圖片格式錯誤，僅限 JPG、PNG 圖片') }
        if (!confirmSize) { this.addUploadErrs('圖片檔案過大，僅限 1mb 以下檔案') }
      }
    }

  }

  // 新增上傳錯誤訊息
  addUploadErrs(err: string) {
    this.uploadErrs.push(err);
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
    this.postService.addPost(this.post).subscribe();
  }
}
