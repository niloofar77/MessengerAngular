import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';  
import { MatIconModule } from '@angular/material/icon';  
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from "@angular/material/divider"; 

@Component({
  selector: 'app-users',
  imports: [CommonModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule, MatDivider],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users  = [
    {
      name: 'John Doe',
      url: 'assets/images/avatar1.jpg',
      description:"t1"
    },
    {
      name: 'Jane Smith',
      url: 'assets/images/avatar1.jpg',
       description:"t2"
    },
    {
      name: 'Michael Johnson',
      url: 'assets/images/avatar1.jpg',
       description:"t3"
    },
    {
      name: 'Emily Davis',
      url: 'assets/images/avatar1.jpg',
       description:"t4"
    },
    {
      name: 'John Doe',
      url: 'assets/images/avatar1.jpg',
       description:"t5"
    },
    {
      name: 'Jane Smith',
      url: 'assets/images/avatar1.jpg',
       description:"t6"
    },
 
  
  ];
}




