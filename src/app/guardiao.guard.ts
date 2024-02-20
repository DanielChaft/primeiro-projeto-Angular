import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const guardiaoGuard: CanActivateFn = (route, state) => {

  let acessoLiberado = inject(AuthService).acessoLiberado();

  if (!acessoLiberado) {
    inject(Router).navigate(['hello-world']);
    return false;
  }

  return true;
};
