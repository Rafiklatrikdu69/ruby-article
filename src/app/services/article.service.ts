import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  apiUrl = "http://localhost:3000"
  constructor(private http:HttpClient) {
    this.getAllArticles();
  }
  articleSubject = new BehaviorSubject<Article[]>([]);
  currentArticle = this.articleSubject.asObservable();
  getAllArticles(){
    this.http.get<Article[]>(`${this.apiUrl}/articles`).subscribe({
      next:(articles)=>this.articleSubject.next(articles),
      error:(error:Error) => console.error(error),
      complete:() => console.log('Get all articles completed')
    })
  }
  getArticleById(id:number){
    return  this.http.get<Article>(`${this.apiUrl}/articles/${id}`)
  }
}
