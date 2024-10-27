import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GestionArticlesComponent } from "./components/gestion-articles/gestion-articles.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GestionArticlesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-blog';
}
