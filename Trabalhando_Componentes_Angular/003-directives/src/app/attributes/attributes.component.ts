import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {
  my_style: string = "disable";
  back_color: string = "yellow";
  font_color: string = "darkred";
  item: string = "";
  list: string[] = []
  isEnableBlock: boolean = false

  constructor() {
  }
  addToList(){
    this.list.push(this.item)
  }
  ngOnInit(): void {

  }

  switch_colors() {
    if (this.my_style == "disable"){
      this.my_style = "enable"
    } else{
      this.my_style = "disable"
    }

  }
}
