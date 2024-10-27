import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Observable } from 'rxjs';
import { Article } from '../../../models/article';
import { AsyncPipe } from '@angular/common';
import { ArticleComponent } from "../article/article.component";
import {MatNavList,MatListItem} from '@angular/material/list';
@Component({
  selector: 'app-gestion-articles',
  standalone: true,
  imports: [AsyncPipe, ArticleComponent,MatNavList,MatListItem],
  templateUrl: './gestion-articles.component.html',
  styleUrl: './gestion-articles.component.css'
})
export class GestionArticlesComponent implements OnInit {
  constructor(private articleService :ArticleService){}
  articles$!:Observable<Article[]>
  ngOnInit(): void {
    this.articles$ = this.articleService.currentArticle
  }
}
