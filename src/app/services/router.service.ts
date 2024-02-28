import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private textoSource = new BehaviorSubject<string>('');
  currentTexto = this.textoSource.asObservable();

  constructor() { }

  changeTexto(texto: string) {
    this.textoSource.next(texto);
  }
}
