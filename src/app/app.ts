import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child } from "./child/child";

@Component({
  selector: 'app-root',
  imports: [FormsModule, Child],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Angular 20 Model Input Demo';
  
  userName = signal('Frontend Forge User');
}
