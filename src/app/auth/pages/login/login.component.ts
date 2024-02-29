import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  myForm: FormGroup = this.fb.group({
    user: ['user'],
    password: ['123456'],
  });

  login() {
    const { user, password } = this.myForm.value;
    this.authService.login(user, password).subscribe({
      next: () => this.router.navigate(['/movie']),
      error: (err) => {
        console.log(err);
      },
    });
    console.log(this.myForm.value);
    //
  }
}
