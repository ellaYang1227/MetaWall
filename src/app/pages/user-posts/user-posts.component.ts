import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Company } from '@data/company';
import { AuthService } from '@services/auth.service';
import { PostService } from '@services/post.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  isTracked = false;
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
    private spinner: NgxSpinnerService
  ) {
    this.spinner.hide();
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    //console.log(this.userId);
  }

  getPosts(filter: any) {
    //console.log('getPosts');
    this.isLoading = true;
    if (this.userId) {
      const data = {
        "user": {
          "_id": "628a3fe18c9d619c7bbcbbfb",
          "name": "BootBB",
          "photo": "",
          "trackTotal": 98987
        },
        "posts": [
          {
            "_id": "628cc815b7e63b4b2cc9d1f1",
            "user": {
              "_id": "628a3fe18c9d619c7bbcbbfb",
              "name": "BootBB",
              "photo": ""
            },
            "image": "https://picsum.photos/id/110/500/200",
            "content": "BootBB",
            "likes": [
              "628a43c38c9d619c7bbc88",
              "628a43c38c9d619c7bbcbbff"
            ],
            "comments": [
              {
                "user": {
                  "_id": "628a43c38c9d619c7bbcbbff",
                  "name": "希琳",
                  "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/wAAGeIJNwAAACJJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAWZ0M2QAAAAASUVORK5CYII="
                },
                "createdAt": "2022-05-23T11:28:19.714Z",
                "content": "123真的～我已經準備冬眠了"
              },
              {
                "user": {
                  "_id": "628a43c38c9d619c7bbcbbff",
                  "name": "希琳",
                  "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/wAAGeIJNwAAACJJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAWZ0M2QAAAAASUVORK5CYII="
                },
                "createdAt": "2022-05-23T11:28:19.714Z",
                "content": "123真的～我已經準備冬眠了"
              }
            ],
            "createdAt": "2022-05-24T11:57:09.367Z"
          },
          {
            "_id": "628b6fd374ed65332e289bec",
            "user": {
              "_id": "628a3fe18c9d619c7bbcbbfb",
              "name": "BootBB",
              "photo": ""
            },
            "image": "https://picsum.photos/id/103/500/200",
            "content": "P. LEAGUE+是臺灣男子職業籃球聯盟，是繼中華職籃之後，臺灣第二個開打的職業籃球聯盟。2021–22年賽季由臺北富邦勇士、新北國王、桃園領航猿、新竹街口攻城獅、福爾摩沙台新夢想家和高雄鋼鐵人六支球隊組成。",
            "likes": [
              "628a43c38c9d619c7bbc88",
              "628a43c38c9d619c7bbcbbff"
            ],
            "comments": [
              {
                "user": {
                  "_id": "628a43c38c9d619c7bbcbbff",
                  "name": "希琳",
                  "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/wAAGeIJNwAAACJJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAWZ0M2QAAAAASUVORK5CYII="
                },
                "createdAt": "2022-05-23T11:28:19.714Z",
                "content": "123真的～我已經準備冬眠了"
              },
              {
                "user": {
                  "_id": "628a43c38c9d619c7bbcbbff",
                  "name": "希琳",
                  "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/wAAGeIJNwAAACJJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAWZ0M2QAAAAASUVORK5CYII="
                },
                "createdAt": "2022-05-23T11:28:19.714Z",
                "content": "123真的～我已經準備冬眠了"
              }
            ],
            "createdAt": "2022-05-23T11:28:19.714Z"
          }
        ]
      }
      this.user = data.user;
      this.titleServer.setTitle(`${this.user.name} | ${Company.name}`);
      this.posts = data.posts;
      setTimeout(() => this.isLoading = false, 1000);

      // this.postService.getUserPosts(this.userId, filter).subscribe(data => {
      //   data.forEach((item: any) => {
      //     item.comments = [{
      //       "user": {
      //         "_id": "628a43c38c9d619c7bbcbbff",
      //         "name": "希琳",
      //         "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/wAAGeIJNwAAACJJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAWZ0M2QAAAAASUVORK5CYII="
      //       },
      //       "createdAt": "2022-05-23T11:28:19.714Z",
      //       "content": "123真的～我已經準備冬眠了"
      //     }, {
      //       "user": {
      //         "_id": "628a43c38c9d619c7bbcbbff",
      //         "name": "希琳",
      //         "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/wAAGeIJNwAAACJJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAWZ0M2QAAAAASUVORK5CYII="
      //       },
      //       "createdAt": "2022-05-23T11:28:19.714Z",
      //       "content": "123真的～我已經準備冬眠了"
      //     }];
      //     item.likes = ["628a43c38c9d619c7bbc88", "628a43c38c9d619c7bbcbbff"];
      //   });

      //   this.user = data.user;
      //   this.titleServer.setTitle(`${this.user.name} | ${Company.name}`);
      //   this.posts = data.posts;
      //   setTimeout(() => this.isLoading = false, 1000);
      // });
    }
  }

  // 切換追蹤狀態
  toggleTracked() {
    this.isTracked = !this.isTracked;
  }
}
