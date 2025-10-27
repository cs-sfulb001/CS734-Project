import {Component, inject} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './homePage.html',
  styleUrls: ['./homePage.css'],
})
export class homePage {
  constructor(private router: Router){}
  search(querry: string) {
    if(querry != ''){
      this.router.navigateByUrl('banner/querry/'+querry);
    }
  }
  toRAG(){
    this.router.navigateByUrl('banner/rag');
  }
}