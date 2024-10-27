import { Routes } from '@angular/router';
import { GestionArticlesComponent } from './components/gestion-articles/gestion-articles.component';
import { ArticleComponent } from './components/article/article.component';

export const routes: Routes = [

  {
    path:'article/:id',
    component:ArticleComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component:GestionArticlesComponent
  }
];
