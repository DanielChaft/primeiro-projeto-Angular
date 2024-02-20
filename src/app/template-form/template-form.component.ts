import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../models/customer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  model = new Customer (null, '', '', '');
  generos = ['Masculino', 'Feminino', 'Prefiro não informar'];
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.warn(this.model)
  }
}
