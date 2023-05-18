import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-card',
  templateUrl: './primary-card.component.html',
  styleUrls: ['./primary-card.component.css']
})
export class PrimaryCardComponent {
  @Input() id: string = "";
  @Input() myImage: string = "";
  @Input() myTitle: string = "";
  @Input() myText: string = "";
  @Input() myDate: string = "";
  @Input() myDescription: string = "";

}
