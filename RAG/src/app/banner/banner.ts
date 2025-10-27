import { Component } from '@angular/core';
import {RouterLink, RouterOutlet, Router} from '@angular/router';

@Component({
  selector: 'app-banner',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
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
