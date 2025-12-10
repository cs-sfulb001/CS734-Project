import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { result } from '../result';
import { RAGMessage } from '../ragmessage';
import { RAGMessageDisplay } from '../ragmessage-display/ragmessage-display';
import { RAGMessageList } from '../ragmessage-list';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rag',
  imports: [RAGMessageDisplay],
  templateUrl: './rag.html',
  styleUrl: './rag.css',
})
export class RAG {
  @ViewChild('query', { static: false }) queryRef!: ElementRef;
  messageList: RAGMessage[] = [];
  RAGMessageService: RAGMessageList = inject(RAGMessageList);
  constructor(private http: HttpClient) {
    this.messageList = this.RAGMessageService.getAllMessages();
  }
  Query(query: string) {
    if(query!=''){
      const newMessage: RAGMessage = {
        id: 0,
        author: "User",
        message: query,
      };
      this.messageList.push(newMessage)
      this.queryRef.nativeElement.value = '';
      this.http.post<result>('http://70.160.179.169:4201/RAG', {"Query":query}).subscribe(
        (response)=>{
          console.log('Success: ', response);
          var Response : result = response;
          const newAIMessage ={
            id:0,
            author: "RAG Powered by Gemini",
            message: Response['result']
          }
          this.messageList.push(newAIMessage)
        },
        (error)=>{
          console.error('Error: ', error);
        }
      );
    }
  }

}