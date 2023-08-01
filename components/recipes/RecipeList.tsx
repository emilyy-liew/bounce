import { useEffect, useState } from "react";

import { getRecipes } from "../../functions/serverRequests";
import Recipe, { RecipeItem } from "./Recipe";
import { IngredientItem } from "./Ingredient";

import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/RecipeList.module.css";

export default function RecipeList(props: {
  myIngredients: IngredientItem[];
  ingredients: IngredientItem[];
  recipes: RecipeItem[];
  setRecipes;
}) {
  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes();
      props.setRecipes(data.Items);
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    const oldRecipes = props.recipes.slice();
    const newRecipes = oldRecipes.map((recipe) => {
      recipe.isDoable = recipe.ingredients.every((recipeIngredient) => {
        return props.myIngredients.some(
          (myIngredient) =>
            myIngredient.ingredient === recipeIngredient.ingredient &&
            myIngredient.amount >= recipeIngredient.amount
        );
      });
      return recipe;
    });
    props.setRecipes(newRecipes);
  }, [props.myIngredients]);

  return (
    <div>
      {props.recipes.map((recipe) => {
        return (
          <div
            className={`${utilStyles.container} ${
              !recipe.isDoable ? styles.disabled : styles.enabled
            }`}
          >
            <Recipe
              key={recipe.ID}
              recipe={recipe}
              ingredients={props.ingredients}
            />
          </div>
        );
      })}
    </div>
  );
}
