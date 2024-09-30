import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './post/post.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, PostComponent]
})
export class AppComponent {
  title = 'metnum';
  autor = "Oriol-Ivan Rozados Alegre";
  titol1 = "Casos prácticos de Métodos Numéricos";
  titol2 = "aplicados a problemas de Ing. Civil";
}
