import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { RAGMessage } from '../ragmessage';
import { RAGMessageDisplay } from '../ragmessage-display/ragmessage-display';
import { RAGMessageList } from '../ragmessage-list';

@Component({
  selector: 'app-rag',
  imports: [RAGMessageDisplay],
  templateUrl: './rag.html',
  styleUrl: './rag.css',
})
export class RAG {
  @ViewChild('querry', { static: false }) querryRef!: ElementRef;
  messageList: RAGMessage[] = [];
  RAGMessageService: RAGMessageList = inject(RAGMessageList);
  constructor() {
    this.messageList = this.RAGMessageService.getAllMessages();
  }
  Querry(querry: string) {
    if(querry!=''){
      const newMessage: RAGMessage = {
        id: 0,
        author: "User",
        message: querry,
      };
      this.messageList.push(newMessage)
      this.querryRef.nativeElement.value = '';
    }
  }

}