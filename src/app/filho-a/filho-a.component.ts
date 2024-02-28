import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { DataService } from '../router.service';

@Component({
  selector: 'app-filho-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filho-a.component.html',
  styleUrl: './filho-a.component.css'
})

export class FilhoAComponent {

  @Input() texto = '';
  @Output() textoPreenchido = new EventEmitter<string>();

  enviar(value: string) {
    this.textoPreenchido.emit(value);
  }

  // texto: string;

  // constructor(private data: DataService) { }
  
  // ngOnInit() {
  //  this.data.currentTexto.subscribe(texto => this.texto = texto);
  // }

}
