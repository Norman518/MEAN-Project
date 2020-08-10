import { Component } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  constructor(public postsService: PostsService) {}
  onAddPost = (form: NgForm) => {
    if (form.invalid) {
      return;
    }
    const { value } = form;
    const { title, content } = value;
    this.postsService.addPost(title, content);
    form.resetForm();
  };
}
export { PostCreateComponent };
