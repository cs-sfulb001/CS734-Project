import { Routes } from '@angular/router';
import {homePage} from './homePage/homePage';
import { Banner } from './banner/banner';
import { QuerryResults } from './querry-results/querry-results';

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
      }
    ],
  },
];
export default routes;