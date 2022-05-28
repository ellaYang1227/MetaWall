import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Company } from '@data/company';
import { PostService } from '@services/post.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  posts: any[] = [];
  isLoading = true;

  constructor(
    private titleServer: Title,
    private postService: PostService,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.hide();
  }

  ngOnInit(): void {
    this.titleServer.setTitle(`${Company.name}`);
  }

  getPosts(filter: any) {
    this.isLoading = true;
    this.postService.getPosts(filter).subscribe(data => {
      data.forEach((item: any) => {
        item.comments = [{
          "user": {
            "_id": "628a43c38c9d619c7bbcbbff",
            "name": "希琳",
            "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/wAAGeIJNwAAACJJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAWZ0M2QAAAAASUVORK5CYII="
          },
          "createdAt": "2022-05-23T11:28:19.714Z",
          "content": "123真的～我已經準備冬眠了"
        }, {
          "user": {
            "_id": "628a43c38c9d619c7bbcbbff",
            "name": "希琳",
            "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF/wAAGeIJNwAAACJJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAHgZLbQAAWZ0M2QAAAAASUVORK5CYII="
          },
          "createdAt": "2022-05-23T11:28:19.714Z",
          "content": "123真的～我已經準備冬眠了"
        }];
        item.likes = ["628a43c38c9d619c7bbc88", "628a43c38c9d619c7bbcbbff"];
      });

      this.posts = data;
      setTimeout(() => this.isLoading = false, 1000);
    });
  }
}
