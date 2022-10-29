import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
   @Injectable()
   export class RecipeService {
     
      recipeSelected = new EventEmitter<Recipe>();

      private recipes: Recipe[] = [
         new Recipe(
            'Chikan tikka masala',
             'Traditional indian food, Spicy food, Non VEG',
             'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg',
             [new Ingredient('Checken',1),
             new Ingredient('Masala',3)]),
         new Recipe(
            'Chole Bhature', 
            'Punjabi dish , comes with 2 bhature',
            'https://images.indulgexpress.com/uploads/user/imagelibrary/2022/6/16/original/CholebhatureisanintrinsicpartofDelhisstreetfood.jpg',
            [new Ingredient('Chole',12),new Ingredient('Maida',3)]),
         new Recipe(
            'Paneer Masala', 
            'Maharastrian dish, Medium spicy',
            'https://www.whiskaffair.com/wp-content/uploads/2019/05/Paneer-Masala-1-3.jpg',
            [new Ingredient('Paneer',1),new Ingredient('Onion',15)])
       ];
      constructor(private slService: ShoppingListService) {

      }
      getRecipies() {
         return this.recipes.slice();
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]) {
         this.slService.addIngredients(ingredients);
      }
      getRecipe(index: number) {
        return this.recipes[index]; 
      }
   }