import { RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RECIPES_ROUTES} from "./recipes.routes";

const appRoutes: Routes = [
      {path: '',redirectTo: '/recipes', pathMatch: 'full'},
      {path: 'recipes', component: RecipesComponent,children:RECIPES_ROUTES},
      {path: 'shopping-list', component: ShoppingListComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);