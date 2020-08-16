import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}
  getPosts = () => {
    this.http.get<{ message: string; posts: Post[] }>('http://localhost:3000/api/posts').subscribe((data) => {
      this.posts = data.posts;
      this.postsUpdated.next([...this.posts]);
    });
  };

  getPostsUpdatedListener = () => {
    return this.postsUpdated.asObservable();
  };

  addPost = (title: string, content: string) => {
    const post: Post = { id: null, title, content };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  };
}

export { PostsService };
