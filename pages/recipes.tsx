import { Authenticator } from "@aws-amplify/ui-react";

import Layout from "../components/Layout";
import { Header, Subheader1 } from "../components/Headers";
import { getIngredients } from "../functions/serverRequests";
import Dropdown from "../components/Dropdown";
import Ingredient, { IngredientItem } from "../components/recipes/Ingredient";

import utilStyles from "../styles/utils.module.css";
import styles from "../styles/recipes.module.css";
import { useEffect, useState } from "react";

export default function Recipes({ user }) {
  const [ingredients, setIngredients] = useState([]);
  const [myIngredients, setMyIngredients] = useState<IngredientItem[]>([]);
  const [selected, setSelected] = useState<{ label: string; value: string }[]>([]);

  const handleSelectChange = (selectedOptions: {
    label: string;
    value: string;
  }[]) => {
    setSelected(selectedOptions);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getIngredients();
        setIngredients(data.Items);
      } catch (error) {
        console.log("Error: " + error);
      }
    };

    fetchData();
  }, []);

  function handleAddClick() {
    const newMyIngredients: IngredientItem[] = selected.map((item) => {
      return {
        ingredient: item.label,
        amount: 0,
        measure: ingredients.find(
          (ingredient) => ingredient.ingredient === item.label
        ).measure,
      };
    });

    let currentIngredients = myIngredients.slice();
    currentIngredients = [...currentIngredients, ...newMyIngredients];
    setMyIngredients(currentIngredients);
    setSelected([]);
  }

  function renderIngredients() {
    return myIngredients.map((item) => <Ingredient ingredient={item} />);
  }

  return (
        <div>
            <Header title="Recipes. 🥘" />
            <Subheader1 title="Inventory." />
            <div className={utilStyles.rowStack}>
                <Dropdown
                    selected={selected}
                    handleSelectChange={handleSelectChange}
                    optionsList={ingredients.map((item) => {
                        return {
                        label: item.ingredient,
                        value: item.ingredient,
                        };
                    })}
                    />
                <button onClick={handleAddClick}>Add</button>
            </div>
            {renderIngredients()}
            <Subheader1 title="Recipes." />
            <Subheader1 title="Grocery List." />
        </div>
  );
}
