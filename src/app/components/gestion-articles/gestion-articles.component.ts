import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Observable, of, Subscription } from 'rxjs';
import { Article } from '../../../models/article';
import { AsyncPipe } from '@angular/common';
import { ArticleComponent } from "../article/article.component";
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-gestion-articles',
  standalone: true,
  imports: [AsyncPipe, ArticleComponent,RouterLink],
  templateUrl: './gestion-articles.component.html',
  styleUrl: './gestion-articles.component.css'
})
export class GestionArticlesComponent implements OnInit ,OnDestroy{
  constructor(private articleService :ArticleService){}

  articles$!:Observable<Article[]>
  subObs !: Subscription;
  ngOnInit(): void {
    this.subObs = this.articleService.currentArticle.subscribe(data=>{
      this.articles$ = of(data);
    })
  }
  ngOnDestroy(): void {
    this.subObs.unsubscribe()
  }
}
