import { Component,input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RAGMessage } from '../ragmessage';

@Component({
  selector: 'app-ragmessage-display',
  imports: [RouterModule],
  templateUrl: './ragmessage-display.html',
  styleUrl: './ragmessage-display.css',
})
export class RAGMessageDisplay {
  Entry = input.required<RAGMessage>();
}
