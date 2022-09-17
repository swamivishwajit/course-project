import { Component, OnInit,ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() onShopping = new EventEmitter<Ingredient>();
  @ViewChild("nameInput", {static:false}) nameInput: ElementRef;
  @ViewChild("amountInput", {static:false}) amountInput:ElementRef;
  
  constructor(nameInput: ElementRef, amountInput: ElementRef) {
    this.nameInput = nameInput;
    this.amountInput = amountInput;
  }

  ngOnInit(): void {
  }
  onAddInput() {
    this.onShopping.emit(
      new Ingredient(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
        )
      )
  }
}
