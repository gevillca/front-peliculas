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
    usuario: [''],
    contrasena: [''],
  });

  login() {
    const { usuario, contrasena } = this.myForm.value;
    this.authService.login(usuario, contrasena).subscribe({
      next: () => this.router.navigate(['/movie']),
      error: (err) => {
        console.log(err);
      },
    });
    //
  }
}
