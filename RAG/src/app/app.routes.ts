import { Routes } from '@angular/router';
import {homePage} from './homePage/homePage';
import { Banner } from './banner/banner';
import { QuerryResults } from './querry-results/querry-results';
import { RAG } from './rag/rag';

export const routes: Routes = [
  {
    path: '',
    component: homePage,
    title: 'Home page',
  },
  {
    path: 'banner',
    component: Banner,
    title: 'Home details',
    children:[
      {
        path: 'querry/:querry',
        component: QuerryResults,
        title: 'Search results'
      },
      {
        path: 'rag',
        component: RAG,
        title: "RAG Interface"
      }
    ],
  },
  {
    path: '**',
    redirectTo: ''
  }
];
export default routes;