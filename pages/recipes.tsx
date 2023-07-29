import { useEffect, useState } from "react";

import { Header, Subheader1 } from "../components/Headers";
import Inventory from "../components/recipes/Inventory";
import RecipeList from "../components/recipes/RecipeList";
import { IngredientItem } from "../components/recipes/Ingredient";
import { getData, updateData } from "../functions/serverRequests";

import utilStyles from "../styles/utils.module.css";

export default function RecipeDashboardPage(props: { user: any }) {
  const [ingredients, setIngredients] = useState<IngredientItem[]>([]);
  const [myIngredients, setMyIngredients] = useState<IngredientItem[]>([]);
  const [dataInitialized, setDataInitialized] = useState<boolean>(false);

  useEffect(() => {
    const getMyIngredients = async () => {
      try {
        const data = await getData(props.user.username);
        if (data.Item.myIngredients !== undefined) {
          setMyIngredients(data.Item.myIngredients);
        }
        setDataInitialized(true);
      } catch (error) {
        console.log("Error: " + error);
      }
    };

    getMyIngredients();
  }, []);

  useEffect(() => {
    const update = async () => {
      try {
        if (dataInitialized) {
          await updateData(props.user.username, "myIngredients", myIngredients);
        }
      } catch (error) {
        console.log(error);
      }
    };

    update();
  }, [dataInitialized, myIngredients]);

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
