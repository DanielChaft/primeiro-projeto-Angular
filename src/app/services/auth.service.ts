import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  update(acesso: boolean) {
    sessionStorage.setItem('acessoLiberado', acesso.toString());
  }

  acessoLiberado(): boolean {
    let acessoLiberadoString = sessionStorage.getItem('acessoLiberado');

    if (!acessoLiberadoString) {
      return false;
    }

    return JSON.parse(acessoLiberadoString);
  }
}
