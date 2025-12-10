import { Component, inject } from '@angular/core';
import { result } from '../result';
import { ResultDisplay } from '../result-display/result-display';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-querry-results',
  imports: [ResultDisplay],
  templateUrl: './querry-results.html',
  styleUrl: './querry-results.css',
})
export class QuerryResults {
  resultList: result[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    this.route.paramMap.subscribe(params =>{
      const value = history.state.data
      if(value != null){
        console.log(value)
        var resultJson : result = value
        console.log(resultJson["result"])
        var stringVale = resultJson["result"]
        var stringList :string[]= stringVale.split('|')
        console.log("Split String", stringList)
        for(let i: number = 0; i<10;i++){
          var temp :result = {result : stringList[i]}
          console.log("Loading ", stringList[i])
          this.resultList.push(temp)
        }
        console.log("Done Loading")

      }
      else{
        console.log("Failed")
      }
    })
  }
  }