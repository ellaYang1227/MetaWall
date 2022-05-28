import { Component, OnInit } from '@angular/core';
import { MemberService } from '@services/member.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private spinner: NgxSpinnerService
  ) {
    this.spinner.hide();
  }

  ngOnInit(): void {
    this.getMyLikes();
  }

  getMyLikes() {
    this.myLikes = [{
      "user": {
        "_id": "628a43c38c9d619c7bbcbbff",
        "name": "BootBB111",
        "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/wAAGeIJNwAAACJJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAWZ0M2QAAAAASUVORK5CYII="
      },
      "_id": "628a43c38c9d619c7bbcbbff",
      "createdAt": "2022-05-24T11:57:09.367Z"
    }, {
      "user": {
        "_id": "628a43c38c9d619c7bbcbbff",
        "name": "BootBB111",
        "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/wAAGeIJNwAAACJJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAWZ0M2QAAAAASUVORK5CYII="
      },
      "_id": "628a43c38c9d619c7bbcbbff",
      "createdAt": "2022-05-24T11:57:09.367Z"
    }];

    setTimeout(() => this.isLoading = false, 1000);
  }

  // 移除貼文
  cancelLike(id: string) {
    //console.log(id);
  }
}
