import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';  
import { MatIconModule } from '@angular/material/icon';  
import { MatCardModule } from '@angular/material/card'; 

@Component({
  selector: 'app-users',
  imports: [CommonModule,
     MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users  = [
    {
      name: 'John Doe',
      avatar: 'https://www.w3schools.com/w3images/avatar2.png'
    },
    {
      name: 'Jane Smith',
      avatar: 'https://www.w3schools.com/w3images/avatar5.png'
    },
    {
      name: 'Michael Johnson',
      avatar: 'https://www.w3schools.com/w3images/avatar4.png'
    },
    {
      name: 'Emily Davis',
      avatar: 'https://www.w3schools.com/w3images/avatar6.png'
    }
  ];
}




