import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { myData } from 'src/app/data/myData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  myImage: string = "";
  myTitle: string = "";
  myText: string = "";
  myDate: string = "";
  myDescription: string = "";
  private id: number = 0;

  constructor(private route: ActivatedRoute) { }  

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = Number(value.get("id"));
      this.setValuesToComponent(this.id);
   });
  }

  setValuesToComponent(id: number): void {
    const result = myData.find(article => article.id === id);
    if (result) {
       this.myImage = result.image;
       this.myTitle = result.title;
       this.myText = result.text;
       this.myDate = result.date;
       this.myDescription = result.description
    } else {
  }
  }
}
