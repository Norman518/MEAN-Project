import { Post } from './post.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
class PostsService {
  private posts: Post[] = [];

  getPosts() {
    return [...this.posts];
  }
  addPost(title: string, content: string) {
    const post: Post = { title, content };
    this.posts.push(post);
  }
}

export { PostsService };
