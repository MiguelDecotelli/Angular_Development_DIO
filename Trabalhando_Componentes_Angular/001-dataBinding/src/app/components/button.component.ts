import { Component, Input} from '@angular/core'

@Component({
    selector: 'my-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})

export class Button {
    @Input()label: string = '';
    // buttonText:string = 'ENTER';
    // buttonTexts:string[] = ['SELL', 'BUY'];
    buttonObject = {
        label: 'Add to cart',
    };

    // getAlert(){
    //     alert("Hello")
    // }

    // getAlert(){
    //     alert(this.label)
    // }
    
    getAlert(num: number){
        alert(num)
    }

}