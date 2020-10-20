import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoading = false;

  constructor(public authService: AuthService) {}

  onLogin(form: NgForm) {
    const { value, invalid } = form;
    if (invalid) {
      return;
    }
    const { email, password } = value;
    this.isLoading = true;
    this.authService.login(email, password);
  }
}
