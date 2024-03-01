import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  public myForm: FormGroup = this.fb.group({
    usuario: ['', [Validators.required]],
    contrasena: ['', [Validators.required]],
    nombres: ['', [Validators.required]],
    primer_apellido: ['', [Validators.required]],
    segundo_apellido: ['', [Validators.required]],
  });

  register() {
    this.authService.register(this.myForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('auth/login');
      },
      error: (error) => {
        console.log({ error });
      },
    });
  }
}
