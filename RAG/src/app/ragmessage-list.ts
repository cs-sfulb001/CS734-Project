import { Injectable } from '@angular/core';
import { RAGMessage } from './ragmessage';
@Injectable({
  providedIn: 'root'
})
export class RAGMessageList {
  protected MessageList: RAGMessage[] = [
        {
            id: 0,
            author: "RAG Powered by Gemini",
            message: "What would you like to know today?",
        }
      ];
      
  getAllMessages(): RAGMessage[] {
    return this.MessageList;
  }
  getMessagesById(id: number): RAGMessage | undefined {
    return this.MessageList.find((resultInstance) => resultInstance.id === id);
  }
}
