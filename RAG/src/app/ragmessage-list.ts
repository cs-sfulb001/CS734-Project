import { Injectable } from '@angular/core';
import { RAGMessage } from './ragmessage';
@Injectable({
  providedIn: 'root'
})
export class RAGMessageList {
  protected MessageList: RAGMessage[] = [
        {
            id: 0,
            author: "RAG Powered by ChatGPT",
            message: "What would you like to know today?",
        },
        {
            id: 1,
            author: "User",
            message: "Tell me about cats",
        },
        {
            id: 2,
            author: "RAG Powered by ChatGPT",
            message: "Cats were likely domesticated around 9,000 years ago in the Near East, where they were attracted to human settlements due to the abundance of food (mainly rodents). Unlike dogs, which were domesticated for specific tasks (like herding or hunting), cats probably chose to live with humans because it benefited them, not the other way around.",
        },
      ];
      
  getAllMessages(): RAGMessage[] {
    return this.MessageList;
  }
  getMessagesById(id: number): RAGMessage | undefined {
    return this.MessageList.find((resultInstance) => resultInstance.id === id);
  }
}
