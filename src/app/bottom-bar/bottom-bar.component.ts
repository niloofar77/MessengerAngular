import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-bar',
  imports: [],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.css'
})
export class BottomBarComponent {
  constructor( private router:Router){

  }
  goSettings(){
    this.router.navigate([""])
  }
  goUsers(){
    this.router.navigate(["users"])
  }
  goChats(){
    this.router.navigate(["chats"])
  }

}
