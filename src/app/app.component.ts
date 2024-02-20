import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private authService: AuthService){

  }

  acessoLiberado: boolean = false;

  ngOnInit() {
    this.acessoLiberado = this.authService.acessoLiberado();
  }

  alterarAcesso(e: any) {
    this.authService.update(e.target.checked);
  }
}
