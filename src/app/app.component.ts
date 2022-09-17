import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header: string = 'Recipies'
  
  onNavigate(value: string) {
    this.header = value;
  }
}
