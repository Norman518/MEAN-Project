import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter();

  onAddPost = () => {
    const post = { title: this.enteredTitle, content: this.enteredContent };
    this.postCreated.emit(post);
  };
}
export { PostCreateComponent };
