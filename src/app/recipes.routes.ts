import { Routes } from '@angular/router';
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {RecipeStartComponent} from "./recipes/recipe-start.component";

export const RECIPES_ROUTES: Routes = [
    {path:'',component: RecipeStartComponent},
    {path:'new',component: RecipeEditComponent},
    {path:':id',component: RecipeDetailComponent},
    {path:':id/edit',component: RecipeEditComponent}
];