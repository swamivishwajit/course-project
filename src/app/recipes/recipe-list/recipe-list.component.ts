import { Component, 
  OnInit,
  Output,
  EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() showDetailRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Chikan tikka masala', 'Traditional indian food, Spicy food, Non VEG','https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg'),
    new Recipe('Chole Bhature', 'Punjabi dish , comes with 2 bhature','https://images.indulgexpress.com/uploads/user/imagelibrary/2022/6/16/original/CholebhatureisanintrinsicpartofDelhisstreetfood.jpg'),
    new Recipe('Paneer Masala', 'Maharastrian dish, Medium spicy','https://www.whiskaffair.com/wp-content/uploads/2019/05/Paneer-Masala-1-3.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeClicked(recipe: Recipe) {
    this.showDetailRecipe.emit(recipe);
  }
}
