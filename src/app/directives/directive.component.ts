import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectiveComponent {

  classeBotaoVerde = 'botao verde';
  classeBotaoVermelho = 'botao vermelho';
  aplicarCores = false;
  camposVisiveis = true;

  estiloParagrafo = { 'font-size': '14px', 'font-style': 'italic'};
  name = '';
  clientes = [
    {nome: 'Daniel'},
    {nome: 'Renato'},
    {nome: 'Paulo'},
    {nome: 'Rafael'}
  ];

  aplicarEstilos(){
    this.aplicarCores = !this.aplicarCores;
  }

  alterarParaMaiusculo($event: string) {
    this.name = $event.toUpperCase();
  }

  esconderCampos() {
    this.camposVisiveis = !this.camposVisiveis;
  }

}
