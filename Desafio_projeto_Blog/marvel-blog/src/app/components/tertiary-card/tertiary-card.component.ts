import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tertiary-card',
  templateUrl: './tertiary-card.component.html',
  styleUrls: ['./tertiary-card.component.css']
})
export class TertiaryCardComponent {
  @Input() id: string = "";
  @Input() myImage: string = "";
  @Input() myTitle: string = "";
  @Input() myText: string = "";
  @Input() myDate: string = "";
  @Input() myDescription: string = "";

}
