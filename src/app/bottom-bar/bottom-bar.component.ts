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
  goHome(){
    this.router.navigate([""])
  }
  goUsers(){
    this.router.navigate(["users"])
  }
  goChats(){
    this.router.navigate(["chats"])
  }
  goSettings(){
    this.router.navigate(["settings"])
  }
}
