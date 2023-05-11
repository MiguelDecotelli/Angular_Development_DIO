import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked, OnDestroy {

  amount: number = 0

  constructor() { }

  add() {
    this.amount += 1
  }

  subtract() {
    this.amount -= 1
  }

  ngOnInit(): void {
    console.log("ngDoInit");
  }

  //checked -> content -> view

  ngDoCheck(): void {
    console.log("ngDoChek")

  }

  // Quando o primeiro conteúdo é iniciado
  ngAfterContentInit(): void {
    console.log("ngAfterContentInitt")
  }

  // Depois da inicialização da view
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  // Após alguma alteração, verifica o conteúdo
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  // Após alguma alteração, verifica a view
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }


  ngOnDestroy(): void {
    console.log("Goodbye World")

  }
}