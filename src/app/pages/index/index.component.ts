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
      this.posts = data;
      setTimeout(() => this.isLoading = false, 1000);
    });
  }
}
