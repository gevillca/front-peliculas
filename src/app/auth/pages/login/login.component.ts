import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private router = inject(Router);
  private fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    email: [],
    password: [],
  });

  login() {
    this.router.navigate(['/']);
  }
}
