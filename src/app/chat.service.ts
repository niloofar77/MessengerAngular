import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket = io('http://localhost:3000');
  private messagesSubject = new BehaviorSubject<any[]>([]);
  messages$ = this.messagesSubject.asObservable();

  constructor() {
    this.socket.on('newMessage', (msg) => {
      const messages = this.messagesSubject.value;
      this.messagesSubject.next([...messages, msg]);
    });

    this.socket.on('loadMessages', (msgs) => {
      this.messagesSubject.next(msgs);
    });
  }

  sendMessage(message: { sender: string, text: string, time: string }): void {
    this.socket.emit('sendMessage', message); 
  }
  
}
