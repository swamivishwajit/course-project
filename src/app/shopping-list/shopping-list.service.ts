import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Chiken', 90),
        new Ingredient('Onion', 20),
        new Ingredient('Tomattos', 20)
    ];

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    getIngredients() {
        //below line will return the copy of ingredients, So that we can't access the original ingredients array 
        return this.ingredients.slice();
    }
    addIngredients(ingredients: Ingredient[]) {
       // this.ingredients = [...this.ingredients,...ingredients];
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice()); 
    }
}