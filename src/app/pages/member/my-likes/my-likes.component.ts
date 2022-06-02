import { Component, OnInit } from '@angular/core';
import { MemberService } from '@services/member.service';
import { PostService } from '@services/post.service';
import { SwalDefaultService } from '@services/swal-default.service';
import { NgxSpinnerService } from 'ngx-spinner';

let swalToast: any;
@Component({
  selector: 'app-my-likes',
  templateUrl: './my-likes.component.html',
  styleUrls: ['./my-likes.component.scss']
})
export class MyLikesComponent implements OnInit {
  title = '我按讚的貼文';
  myLikes!: any[];
  isLoading = true;

  constructor(
    private memberService: MemberService,
    private postService: PostService,
    private swalDefaultService: SwalDefaultService,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.hide();
    swalToast = this.swalDefaultService.toastDefault;
  }

  ngOnInit(): void {
    this.getMyLikes();
  }

  getMyLikes() {
    this.memberService.getLikeList().subscribe(data => {
      this.myLikes = data;
      setTimeout(() => this.isLoading = false, 1000);
    });
  }

  // 取消按讚貼文
  unlike(id: string) {
    this.postService.postUnlike(id).subscribe(res => {
      if (res.success) {
        const findIndex = this.myLikes.findIndex(myLike => myLike._id === id);
        this.myLikes.splice(findIndex, 1);
        this.getMyLikes();
      }

      swalToast.fire({
        icon: res.success ? 'success' : 'error',
        title: `取消按讚${res.success ? '成功' : '失敗'}`
      });
    });
  }
}
