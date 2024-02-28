import { Component } from '@angular/core';
import { FilhoAComponent } from "../filho-a/filho-a.component";
import { FilhoBComponent } from "../filho-b/filho-b.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { DataService } from '../router.service';

@Component({
    selector: 'app-hello-world',
    standalone: true,
    templateUrl: './hello-world.component.html',
    styleUrl: './hello-world.component.css',
    imports: [FilhoAComponent, FilhoBComponent, RouterModule, CommonModule]
})

export class HelloWorldComponent {
 
    textoVaiParaFilhoA: string = '';
    textoVeioDoFilhoA: string = '';
    textoVaiParaFilhoB: string = '';
    textoVeioDoFilhoB: string = '';

//    constructor(private data: DataService) { }

//    enviarTextoParaFilhoA(value: string) {
//        this.data.changeTexto(value);
}
