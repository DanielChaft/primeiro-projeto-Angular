import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})

export class DataBindingComponent {
  botaoClass = {botao: true, verde: true, vermelho: false};
  estilizarTitulo = false;
  imageWidth = '400px';
  message = 'Meu primeiro Data Binding!';
  imagePath = 'assets/80sComputer.jpg';
  isDisabled = true;
  ariaLabel = 'Fechar';
  nomeCliente = '';

  botaoFechar = `
    border: 2px 5px solid;
    border-radius: 10px;
    padding: 5px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center  
  `;
  enableCloseButton(){
    this.isDisabled = !this.isDisabled;
  }
  aplicarEstiloTitulo(){
    this.estilizarTitulo = !this.estilizarTitulo;
  }
}
