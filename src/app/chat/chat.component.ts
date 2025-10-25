import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ChatService } from '../chat.service';
import { MatToolbarModule } from '@angular/material/toolbar';  
import {MatDividerModule} from '@angular/material/divider';

import { MatIconModule } from '@angular/material/icon';  
import { MatCardModule } from '@angular/material/card'; 
import { Router } from '@angular/router';
import { MainComponent } from '../layout/main';
@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    
    
    
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: any[] = [];
  newMessage: string = '';

  constructor(private chatService: ChatService,private router:Router) {}

  ngOnInit(): void {
    this.chatService.messages$.subscribe(messages => {
      this.messages = messages;
    });
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      const message = {
        sender: 'You',
        text: this.newMessage,
        time: new Date().toLocaleTimeString(),
      };
      this.chatService.sendMessage(message); 
      this.newMessage = ''; 
    }
  }
  goUsersPage(){
    this.router.navigate(["users"])
  }
}
