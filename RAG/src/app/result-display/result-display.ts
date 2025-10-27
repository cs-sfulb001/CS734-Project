import { Component, input } from '@angular/core';
import { result } from '../result';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-result-display',
  imports: [RouterModule],
  templateUrl: './result-display.html',
  styleUrl: './result-display.css',
})
export class ResultDisplay {
  Entry = input.required<result>();
}
