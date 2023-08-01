import { useEffect, useState, Dispatch } from "react";

import { getIngredients } from "../../functions/serverRequests";
import Dropdown, { OptionItem } from "../Dropdown";
import Ingredient, { IngredientItem } from "./Ingredient";

import utilStyles from "../../styles/utils.module.css";

export default function Inventory(props: {
  myIngredients: IngredientItem[];
  setMyIngredients: Dispatch<IngredientItem[]>;
  ingredients: IngredientItem[];
  setIngredients: Dispatch<IngredientItem[]>;
}) {
  const [selected, setSelected] = useState<OptionItem[]>([]);

  const handleSelectChange = (selectedOptions: OptionItem[]) => {
    setSelected(selectedOptions);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getIngredients();
        props.setIngredients(data.Items);
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
        measure: props.ingredients.find(
          (ingredient) => ingredient.ingredient === item.label
        ).measure,
      };
    });

    const oldIngredients = props.myIngredients.slice();
    const newIngredients = [...oldIngredients, ...newMyIngredients];
    props.setMyIngredients(newIngredients);
    setSelected([]);
  }

  function handlePlusClick(ingredient: IngredientItem) {
    const newMyIngredients = props.myIngredients.slice();
    newMyIngredients.find((item) => item.ingredient === ingredient.ingredient)
      .amount++;
    props.setMyIngredients(newMyIngredients);
  }

  function handleMinusClick(ingredient: IngredientItem) {
    if (ingredient.amount > 0) {
      const newMyIngredients = props.myIngredients.slice();
      newMyIngredients.find((item) => item.ingredient === ingredient.ingredient)
        .amount--;
      props.setMyIngredients(newMyIngredients);
    }
  }

  return (
    <div>
      <div className={utilStyles.rowStack}>
        <Dropdown
          selected={selected}
          handleSelectChange={handleSelectChange}
          optionsList={props.ingredients
            .map((item) => {
              return {
                label: item.ingredient,
                value: item.ingredient,
              };
            })
            .filter(
              (item) =>
                !props.myIngredients.some(
                  (ingredient) => item.label === ingredient.ingredient
                )
            )}
        />
        <button onClick={handleAddClick}>Add</button>
      </div>
      <div className={utilStyles.container}>
        {props.myIngredients
          .sort((a, b) => {
            if (a.ingredient > b.ingredient) {
              return 1;
            } else if (a.ingredient < b.ingredient) {
              return -1;
            } else {
              return 0;
            }
          })
          .map((item) => (
            <Ingredient
              ingredient={item}
              onPlusClick={() => handlePlusClick(item)}
              onMinusClick={() => handleMinusClick(item)}
            />
          ))}
      </div>
    </div>
  );
}
