import { getIngredients } from "../../functions/serverRequests";
import Dropdown from "../Dropdown";
import Ingredient, { IngredientItem } from "./Ingredient";

import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/recipes.module.css";
import { useEffect, useState } from "react";

export default function Inventory() {
  const [ingredients, setIngredients] = useState<IngredientItem[]>([]);
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
        </div>
  );
}
