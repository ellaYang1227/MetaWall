import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { CommentService } from '@services/comment.service';
import { PostService } from '@services/post.service';
import { SwalDefaultService } from '@services/swal-default.service';

let swalToast: any;
@Component({
  selector: 'app-posts-group',
  templateUrl: './posts-group.component.html',
  styleUrls: ['./posts-group.component.scss']
})
export class PostsGroupComponent implements OnInit {

  public get userId(): string | undefined {
    return this.authService.user?.id;
  }

  showSendCommentSpinner = false;
  userDefaultImg = this.authService.userDefaultImg;
  comment = new FormControl('');
  @Input() isLoading: boolean = true;
  @Input() posts: any[] = [];
  @Output() getPosts = new EventEmitter<any>();

  constructor(
    private authService: AuthService,
    private postService: PostService,
    private commentService: CommentService,
    private swalDefaultService: SwalDefaultService
  ) {
    swalToast = this.swalDefaultService.toastDefault;
  }

  ngOnInit(): void {
  }

  postFilter(filter: any) {
    this.getPosts.emit(filter);
  }

  trackByFn(index: number, item: any) {
    return item._id;
  }

  sendComment(postIndex: number) {
    const comment = this.comment.value.trim();
    if (comment) {
      const post = this.posts[postIndex];
      this.showSendCommentSpinner = true;
      this.postService.addPostComment(post._id, this.comment.value).subscribe(data => {
        this.comment.setValue('');
        this.posts[postIndex] = data;
        this.showSendCommentSpinner = false;
      });
    } else {
      this.comment.setValue(comment);
    }
  }

  // 是否已經按讚
  isAlreadyLikes(likes: any[]): boolean {
    return likes.some(like => like === this.userId);
  }

  toggleLike(postIndex: number) {
    const post = this.posts[postIndex];
    if (this.isAlreadyLikes(post.likes)) {
      // 取消按讚
      this.postService.postUnlike(post._id).subscribe(res => {
        if (res.success) { post.likes = res.data.likes }
        this.setSwalToast(res.success, '取消按讚');
      });
    } else {
      // 新增按讚
      this.postService.addPostLike(post._id).subscribe(res => {
        if (res.success) { post.likes = res.data.likes }
        this.setSwalToast(res.success, '按讚');
      });
    }
  }

  delPost(postIndex: number) {
    const post = this.posts[postIndex];
    this.postService.delPost(post._id).subscribe(res => {
      if (res.success) { this.posts.splice(postIndex, 1) }
      this.setSwalToast(res.success, '刪除貼文');
    });
  }

  delComment(postIndex: number, commentsIndex: number) {
    const post = this.posts[postIndex];
    const comment = post.comments[commentsIndex];
    this.commentService.delComment(comment._id).subscribe(res => {
      if (res.success) { this.posts[postIndex].comments.splice(commentsIndex, 1) }
      this.setSwalToast(res.success, '刪除留言');
    });
  }

  setSwalToast(success: boolean, activity: '按讚' | '取消按讚' | '刪除貼文' | '刪除留言') {
    swalToast.fire({
      icon: success ? 'success' : 'error',
      title: `${activity}${success ? '成功' : '失敗'}`
    });
  }
}
