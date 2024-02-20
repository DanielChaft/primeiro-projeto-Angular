import { Component } from '@angular/core';
import { FilhoAComponent } from "../filho-a/filho-a.component";
import { FilhoBComponent } from "../filho-b/filho-b.component";
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-hello-world',
    standalone: true,
    templateUrl: './hello-world.component.html',
    styleUrl: './hello-world.component.css',
    imports: [FilhoAComponent, FilhoBComponent, RouterModule]
})
export class HelloWorldComponent {

}
