import { useState } from "react";

import { Header, Subheader1 } from "../components/Headers";
import Inventory from "../components/recipes/Inventory";
import RecipeList from "../components/recipes/RecipeList";
import { IngredientItem } from "../components/recipes/Ingredient";

import utilStyles from "../styles/utils.module.css";

export default function RecipeDashboardPage(props: { user: any }) {
  const [ingredients, setIngredients] = useState<IngredientItem[]>([]);
  const [myIngredients, setMyIngredients] = useState<IngredientItem[]>([]);

  return (
    <div>
      <Header title="Recipes. 🥘" />
      <div className={utilStyles.rowEvenSpace}>
        <div>
          <Subheader1 title="Inventory." />
          <Inventory
            myIngredients={myIngredients}
            setMyIngredients={setMyIngredients}
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        </div>
        <div>
          <Subheader1 title="Recipes." />
          <RecipeList myIngredients={myIngredients} ingredients={ingredients} />
        </div>
        <Subheader1 title="Grocery List." />
      </div>
    </div>
  );
}
