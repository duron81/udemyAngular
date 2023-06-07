import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'some description', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'),
        new Recipe('A second recipe', 'another description', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}