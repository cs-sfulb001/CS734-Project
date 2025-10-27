import { Component, inject } from '@angular/core';
import { result } from '../result';
import { results } from '../result-list';
import { ResultDisplay } from '../result-display/result-display';

@Component({
  selector: 'app-querry-results',
  imports: [ResultDisplay],
  templateUrl: './querry-results.html',
  styleUrl: './querry-results.css',
})
export class QuerryResults {
  resultList: result[] = [];
  resultService: results = inject(results);
  constructor() {
    this.resultList = this.resultService.getAllResults();
  }
}