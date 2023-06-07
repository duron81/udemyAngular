import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) {}

  ingredients: Ingredient[];

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.ingredientsChanged
      .subscribe(
        (ing: Ingredient[]) => {
          this.ingredients = ing;
        }
      )
  }





  // ingredients: Ingredient[] = [
  //   new Ingredient('Apple', 5),
  //   new Ingredient('Tomatoes', 10),
  // ];

  // onIngredientsAdded(ingredients) {
  //   this.ingredients.push(ingredients);
  // }
}
