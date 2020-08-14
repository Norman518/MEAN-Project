import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
class PostListComponent implements OnInit, OnDestroy {
  private postsSub: Subscription;
  posts: Post[] = [];
  constructor(public postsService: PostsService) {}

  ngOnInit = () => {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostsUpdatedListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  };

  ngOnDestroy = () => {
    this.postsSub.unsubscribe();
  };
}
export { PostListComponent };
