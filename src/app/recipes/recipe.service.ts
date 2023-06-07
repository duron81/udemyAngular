import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 
        'some description', 
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
        [
            new Ingredient('Meat',1), 
            new Ingredient('Potato',5)
        ]
        ),
        new Recipe('A second recipe', 
        'another description', 
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
        [
            new Ingredient('Meat',2), 
            new Ingredient('Vegatables',4)
        ]
        ),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}