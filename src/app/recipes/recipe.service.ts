import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('Schnitzel','Very tasty','http://images.indiatvnews.com/lifestylelifestyle/2014/food-fact1.jpg',[
      new Ingredient('French Fries',2),new Ingredient('Pork Meat',1)
    ]),
    new Recipe('Summer Salad','Okayish','http://kingofwallpapers.com/food/food-004.jpg',[
      new Ingredient('Shawarmaa ',1),new Ingredient('Meat',1)
    ]),
    new Recipe('Summer Salad','Okayish','http://barcodedc.com/wp-content/gallery/food/pizza-junk-food-600.jpg',[]),
    new Recipe('Summer Salad','Okayish','http://catshostel.com/wp-content/uploads/2016/10/cats-hostel-madrid-breakfast-spanish.jpg',[])

  ];
  constructor() { }
  getRecipes(){
    return this.recipes;
  }

  getRecipe(id:number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1)
  }

}
