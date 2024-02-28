import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filho-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filho-b.component.html',
  styleUrl: './filho-b.component.css'
})
export class FilhoBComponent {

  @Input() texto = '';
  @Output() textoPreenchido = new EventEmitter<string>();

  enviar(value: string) {
    this.textoPreenchido.emit(value);
  }
}
