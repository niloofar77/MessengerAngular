import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-settings',
  imports: [MatButtonModule, MatDivider,MatIcon],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
