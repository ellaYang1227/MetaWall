import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-posts-group',
  templateUrl: './posts-group.component.html',
  styleUrls: ['./posts-group.component.scss']
})
export class PostsGroupComponent implements OnInit {
  showSendCommentSpinner = false;
  userDefaultImg = this.authService.userDefaultImg;
  initComment = '';
  comment = '';
  @Input() isLoading: boolean = true;
  @Input() posts: any[] = [];
  @Output() getPosts = new EventEmitter<any>();

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  postFilter(filter: any) {
    this.getPosts.emit(filter);
  }

  trackByFn(index: number, item: any) {
    return item._id;
  }

  sendComment() {
    //console.log(this.comment);
    this.showSendCommentSpinner = true;
  }

  // 是否已經按讚
  isAlreadyLikes(userId: string, likes: any[]): boolean {
    // console.log(userId)
    // console.log(likes)
    // console.log(likes.find(like => userId));
    return likes.find(like => userId);
  }
}
