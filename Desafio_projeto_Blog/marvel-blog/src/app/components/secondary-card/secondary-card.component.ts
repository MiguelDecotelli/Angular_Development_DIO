import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-card',
  templateUrl: './secondary-card.component.html',
  styleUrls: ['./secondary-card.component.css']
})
export class SecondaryCardComponent {
  @Input() id: string = "";
  @Input() myImage: string = "";
  @Input() myText: string = "";
  @Input() myDate: string = "";
  @Input() myDescription: string = "";
}
