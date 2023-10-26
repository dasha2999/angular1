import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-forms';
  name = "";
  age = 20;
  specialty = "front-end developer";

  validate(name: string, age: number, specialty: string): void {
    console.log(name, age, specialty)
  }
}
