import { useEffect, useState } from "react";

import { getRecipes } from "../../functions/serverRequests";
import Recipe, { RecipeItem } from "./Recipe";
import { IngredientItem } from "./Ingredient";

import utilStyles from "../../styles/utils.module.css";

export default function RecipeList(props: { myIngredients: IngredientItem[], ingredients: IngredientItem[] }) {
    const [ recipes, setRecipes ] = useState<RecipeItem[]>([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const data = await getRecipes();
            setRecipes(data.Items);
        };

        fetchRecipes();
    }, []);

    useEffect(() => {
        const oldRecipes = recipes.slice();
        const newRecipes = oldRecipes.map((recipe) => {
            const recipeIngredientArr = Object.keys(recipe.ingredients);
            const ingredientAmtArr = Object.values(recipe.ingredients);
            recipe.isDoable = recipeIngredientArr.every((recipeIngredient, index) => {
                    return props.myIngredients.some((myIngredient) => myIngredient.ingredient === recipeIngredient &&
                            myIngredient.amount >= ingredientAmtArr[index])})
            return recipe;
        })
        console.log("here")
        setRecipes(newRecipes);
    }, [JSON.stringify(props.myIngredients)]);

    return (
        <div>
            {recipes.map((recipe) => {
                return (
                    <div className={utilStyles.container}>
                        <Recipe 
                            key={recipe.ID}
                            recipe={recipe}
                            ingredients={props.ingredients}
                                />
                    </div>
                );
            })}
        </div>
    )
}