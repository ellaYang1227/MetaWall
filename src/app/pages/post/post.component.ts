import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Company } from '@data/company';
import { PostService } from '@services/post.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: any[] = [];
  isLoading = true;
  postId!: string | null;

  constructor(
    private titleServer: Title,
    private route: ActivatedRoute,
    private postService: PostService,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.hide();
  }

  ngOnInit(): void {
    this.titleServer.setTitle(`${Company.name}`);
    this.postId = this.route.snapshot.paramMap.get('id');
  }

  getPost(filter: any) {
    if (this.postId) {
      this.isLoading = true;
      this.postService.getPost(this.postId, filter).subscribe(data => {
        if (data) {
          this.posts.push(data)
        } else {
          this.posts = [];
        }
        setTimeout(() => this.isLoading = false, 1000);
      });
    }
  }
}
