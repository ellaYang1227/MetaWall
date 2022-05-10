import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Company } from '@data/company';
import { PageService } from '@services/page.service';
import { PostService } from '@services/post.service';

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
    private pageService: PageService,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.pageService['components.header.visible'] = true;
    this.pageService['components.right-nav.visible'] = true;
    this.titleServer.setTitle(`${Company.name}`);
  }

  getPosts(filter: any) {
    this.isLoading = true;
    this.postService.getPosts(filter).subscribe(data => {
      this.posts = data;
      setTimeout(() => this.isLoading = false, 1000);
    });
  }

  trackByFn(index: number, item: any) {
    return item._id;
  }
}
