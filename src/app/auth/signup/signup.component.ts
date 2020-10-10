import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignUpComponent {
  isLoading = false;

  constructor(public authService: AuthService) {}

  onSignUp(form: NgForm) {
    const { value, invalid } = form;
    if (invalid) {
      return;
    }
    const { email, password } = value;
    this.authService.createUser(email, password);
  }
}
