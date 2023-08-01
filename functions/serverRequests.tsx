import { IngredientItem } from "../components/recipes/Ingredient";
import { RecipeItem } from "../components/recipes/Recipe";

export async function getData(userID: any) {
  const response = await fetch(
    `https://2p4s2d45nb.execute-api.eu-north-1.amazonaws.com/test/data/${userID}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data;
}

export async function updateData(userID, attributeName, attributeValue) {
  const response = await fetch(
    `https://2p4s2d45nb.execute-api.eu-north-1.amazonaws.com/test/data/${userID}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        attributeName: attributeName,
        attributeValue: attributeValue,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update data: ");
  }
}

export async function getIngredients() {
  const response = await fetch(
    "https://2p4s2d45nb.execute-api.eu-north-1.amazonaws.com/test/ingredients"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Ingredient Options");
  }

  const data = await response.json();
  return JSON.parse(data.body);
}

export async function getRecipes() {
  const response = await fetch(
    "https://2p4s2d45nb.execute-api.eu-north-1.amazonaws.com/test/recipes/"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Ingredient Options");
  }

  const data = await response.json();
  return JSON.parse(data.body);
}

export async function postNewIngredient(ingredient: string, measure: string) {
  const response = await fetch(
    "https://2p4s2d45nb.execute-api.eu-north-1.amazonaws.com/test/ingredients",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredient: ingredient,
        measure: measure,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to post new Ingredient");
  }
}

export async function postRecipe(recipe: RecipeItem) {
  const response = await fetch(
    "https://2p4s2d45nb.execute-api.eu-north-1.amazonaws.com/test/recipes",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ID: recipe.ID,
        recipeTitle: recipe.recipeTitle,
        ingredients: recipe.ingredients,
        steps: recipe.steps,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to post new recipe");
  }
}
