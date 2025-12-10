import { Component } from '@angular/core';
import {RouterLink, RouterOutlet, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-banner',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  constructor(private router: Router, private http: HttpClient){}
  search(querry: string) {
    if(querry != ''){
      var query = {"Query":querry}
      this.http.post<string>('http://70.160.179.169:4201/query', query).subscribe(
        (response)=>{
          console.log('Success: ', response);
          this.router.navigate(['banner/querry/'+querry], {state: {data: response}});
        },
        (error)=>{
          console.error('Error: ', error);
        }
      );
    }
  }
  toRAG(){
    this.router.navigateByUrl('banner/rag');
  }
}
