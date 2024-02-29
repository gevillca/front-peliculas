import { Component, computed, effect, inject } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthStatus } from './auth/interfaces';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front-peliculas';

  ngOnInit(): void {
    initFlowbite();
  }

  private authService = inject(AuthService);
  private router = inject(Router);

  public finishedAuthCheck = computed<boolean>(() => {
    if (this.authService.authStatus() === AuthStatus.cheacking) {
      return false;
    }

    return true;
  });
  public authStatusChangedEffect = effect(() => {
    console.log(this.authService.authStatus());

    switch (this.authService.authStatus()) {
      case AuthStatus.cheacking:
        return;
      case AuthStatus.authenticated:
        this.router.navigateByUrl('/movie');
        return;
      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/movie');
        return;
    }
  });
}
