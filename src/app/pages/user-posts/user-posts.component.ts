import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Company } from '@data/company';
import { AuthService } from '@services/auth.service';
import { MemberService } from '@services/member.service';
import { PostService } from '@services/post.service';
import { SwalDefaultService } from '@services/swal-default.service';
import { NgxSpinnerService } from 'ngx-spinner';

let swalToast: any;
@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  public get currentUserId(): string | undefined {
    return this.authService.user?.id;
  }

  isFollowing = false;
  userId!: string | null;
  user!: any;
  posts: any[] = [];
  isLoading = true;
  userDefaultImg = this.authService.userDefaultImg;

  constructor(
    private titleServer: Title,
    private route: ActivatedRoute,
    private authService: AuthService,
    private postService: PostService,
    private memberService: MemberService,
    private swalDefaultService: SwalDefaultService,
    private spinner: NgxSpinnerService
  ) {
    swalToast = this.swalDefaultService.toastDefault;
    this.spinner.hide();
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
  }

  getPosts(filter: any) {
    this.isLoading = true;
    if (this.userId) {
      this.postService.getUserPosts(this.userId, filter).subscribe(data => {
        this.user = data.user;
        this.titleServer.setTitle(`${this.user.name} - 個人牆 | ${Company.name}`);
        this.setIsFollowing();
        this.posts = data.posts;
        setTimeout(() => this.isLoading = false, 1000);
      });
    }
  }

  // 切換追蹤狀態
  toggleFollow() {
    if (this.isFollowing) {
      this.memberService.unfollow(this.user._id).subscribe(res => {
        if (res.success) {
          this.user.followers = res.data.followers;
          this.setIsFollowing();
        }

        this.setSwalToast(res.success, '取消跟隨');
      });
    } else {
      this.memberService.addFollow(this.user._id).subscribe(res => {
        if (res.success) {
          this.user.followers = res.data.followers;
          this.setIsFollowing();
        }

        this.setSwalToast(res.success, '跟隨');
      });
    }
  }

  setSwalToast(success: boolean, activity: '跟隨' | '取消跟隨' | '刪除全部貼文') {
    swalToast.fire({
      icon: success ? 'success' : 'error',
      title: `${activity}${success ? '成功' : '失敗'}`
    });
  }

  setIsFollowing() {
    this.isFollowing = this.user.followers.some((follower: any) => follower.user === this.currentUserId);
  }

  delPosts() {
    this.postService.delPosts().subscribe(res => {
      if (res.success) { this.posts = [] }
      this.setSwalToast(res.success, '刪除全部貼文');
    })
  }
}
