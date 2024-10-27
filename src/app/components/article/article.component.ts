import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../../../models/article';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,DatePipe,AsyncPipe],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent  implements OnInit,OnDestroy {
 @Input() article!: Article  | undefined;
 routeSubscription!: Subscription;
  constructor(private activatedRoute:ActivatedRoute,private articleService:ArticleService){

  }
ngOnInit(): void {
 this.routeSubscription =  this.activatedRoute.paramMap.subscribe((params:ParamMap) =>{
    const articleId = parseInt(params.get('id')!)
      this.articleService.getArticleById(articleId).subscribe(art =>{
        this.article = art;
        console.log(this.article)
      })
  })
}
ngOnDestroy(): void {
  this.routeSubscription.unsubscribe();
}
}
