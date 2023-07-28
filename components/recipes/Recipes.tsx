import { useEffect, useState } from "react";
import { getRecipes } from "../../functions/serverRequests";
import Recipe, { RecipeItem } from "./Recipe";
import { IngredientItem } from "./Ingredient";
// props: { myIngredients: IngredientItem[] }
export default function RecipeList() {
    const [ recipes, setRecipes ] = useState<RecipeItem[]>([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const data = await getRecipes();
            setRecipes(data.Items);
        };

        fetchRecipes();
    }, []);

    return (
        <div>
            {recipes.map((item) => {
                
                return<Recipe key={item.ID} recipe={item} />
            })}
        </div>
    )
}