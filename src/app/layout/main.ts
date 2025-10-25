import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomBarComponent } from '../bottom-bar/bottom-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';  

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,BottomBarComponent, MatToolbarModule,],
  templateUrl: './main.html',
  styleUrls: ['./main.css']
})
export class MainComponent {
  
}
