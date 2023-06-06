import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent {
  recipes: Recipe[] = [
    new Recipe('A test tecipe', 'some description', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'),
  ];

  chosenRecipe: Recipe;

  onChosenRecipe(recipe) {
    this.chosenRecipe = recipe;
  }
}
 