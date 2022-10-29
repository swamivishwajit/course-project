import { style } from '@angular/animations';
import { Component, OnInit,ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  @ViewChild("nameInput", {static:false}) nameInput: ElementRef;
  @ViewChild("amountInput", {static:false}) amountInput:ElementRef;
  
  constructor( private slService : ShoppingListService) {
    
  }

  ngOnInit(): void {
  }
  onAddInput() {
    this.slService.addIngredient(
      new Ingredient(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
        ))
  }
  deleteShoppingList() {
    if (confirm("Are you sure you want to delete the shopping list",)) {
      console.log("Deleted");
    }
  }
}
