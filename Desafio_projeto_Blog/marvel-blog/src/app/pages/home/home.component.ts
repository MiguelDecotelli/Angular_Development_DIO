import { Component } from '@angular/core';
import { myData } from 'src/app/data/myData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articlesWithId: any[];

  constructor() {
    this.articlesWithId = myData.map((article) => {
      return {...article};
    });
  }
}
