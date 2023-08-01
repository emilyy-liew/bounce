import { useState } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import PopUpWindow from "../PopUpWindow";
import { IngredientItem } from "./Ingredient";
import plus from "../../public/images/plus.png";
import CreatableDropdown from "../CreatableDropdown";
import { postNewIngredient, postRecipe } from "../../functions/serverRequests";

import styles from "../../styles/NewRecipeForm.module.css";
import { OptionItem } from "../Dropdown";
import { RecipeItem } from "./Recipe";

export default function NewRecipeForm(props: {
  setIsFormVisible;
  ingredients: IngredientItem[];
  setIngredients;
  myIngredients: IngredientItem[];
  setRecipes;
}) {
  const [recipeTitle, setRecipeTitle] = useState<string>("");
  const [steps, setSteps] = useState<string>("");
  const [ingredients, setIngredients] = useState<IngredientItem[]>([]);

  function handleChange(
    event,
    setter: React.Dispatch<React.SetStateAction<any>>
  ) {
    setter(event.target.value);
  }

  function handleNameChange(newValue: OptionItem, index: number) {
    const newIngredients = ingredients.slice();
    newIngredients[index].ingredient = newValue === null ? "" : newValue.label;
    setIngredients(newIngredients);
  }

  function handleAmountChange(event, index: number) {
    const newIngredients = ingredients.slice();
    newIngredients[index].amount = event.target.value;
    setIngredients(newIngredients);
  }

  function handleMeasureChange(newValue, index: number) {
    const newIngredients = ingredients.slice();
    newIngredients[index].measure = newValue === null ? "" : newValue.label;
    setIngredients(newIngredients);
  }

  function handleAddIngredientClick() {
    const newIngredients = ingredients.slice();
    newIngredients.push({
      ingredient: "",
      amount: 0,
      measure: "",
    });
    setIngredients(newIngredients);
  }

  function handleSubmit() {
    ingredients.forEach((item) => {
      if (
        props.ingredients.find(
          (ingredient) => ingredient.ingredient === item.ingredient
        ) === undefined
      ) {
        props.setIngredients((prev) => [
          ...prev,
          { ingredient: item.ingredient, amount: 0, measure: item.measure },
        ]);

        (async () => {
          try {
            await postNewIngredient(item.ingredient, item.measure);
          } catch (error) {
            console.log(error);
          }
        })();
      }
    });

    const newRecipe: RecipeItem = {
      ID: uuidv4(),
      recipeTitle: recipeTitle,
      ingredients: ingredients,
      steps: steps.split("\n"),
      isDoable: ingredients.every((recipeIngredient) => {
        return props.myIngredients.some(
          (myIngredient) =>
            myIngredient.ingredient === recipeIngredient.ingredient &&
            myIngredient.amount >= recipeIngredient.amount
        );
      }),
    };

    props.setRecipes((prev) => [...prev, newRecipe]);

    (async () => {
      try {
        await postRecipe(newRecipe);
      } catch (error) {
        console.log(error);
      }
    })();
  }

  return (
    <PopUpWindow
      setter={props.setIsFormVisible}
      label={"Add a New Recipe"}
      children={
        <div>
          <label htmlFor="recipeTitle">
            Recipe Title <span className={styles.required}>*</span>
          </label>
          <br />
          <input
            type="text"
            id="recipeTitle"
            name="recipeTitle"
            value={recipeTitle}
            onChange={(event) => handleChange(event, setRecipeTitle)}
            required
            className={styles.titleInput}
          />
          <br />
          <label htmlFor="ingredients">
            Ingredients <span className={styles.required}>*</span>
          </label>
          <br />
          <button onClick={handleAddIngredientClick}>
            <Image src={plus} width={20} height={20} alt={"plus"} />
            Add Ingredient
          </button>
          <br />
          {ingredients.map((item, index) => {
            return (
              <div>
                <label htmlFor="ingredients">
                  Name: <span className={styles.required}>*</span>
                </label>
                <CreatableDropdown
                  defaultOptions={props.ingredients
                    .filter(
                      (ingredient) =>
                        !ingredients.some(
                          (item) => item.ingredient === ingredient.ingredient
                        )
                    )
                    .map((ingredient) => {
                      return {
                        label: ingredient.ingredient,
                        value: ingredient.ingredient,
                      };
                    })}
                  value={{ label: item.ingredient, value: item.ingredient }}
                  onValueChange={handleNameChange}
                  index={index}
                  isDisabled={false}
                />
                <label htmlFor="ingredients">
                  Amount Needed: <span className={styles.required}>*</span>
                </label>
                <input
                  type="number"
                  id="ingredientAmount"
                  name="ingredientAmount"
                  value={item.amount}
                  onChange={(event) => handleAmountChange(event, index)}
                  required
                />
                <label htmlFor="ingredients">
                  Unit of Measure: <span className={styles.required}>*</span>
                </label>
                <CreatableDropdown
                  defaultOptions={[
                    ...new Set(props.ingredients.map((item) => item.measure)),
                  ].map((measure) => {
                    return { label: measure, value: measure };
                  })}
                  value={
                    props.ingredients.find(
                      (ingredient) => ingredient.ingredient === item.ingredient
                    ) !== undefined
                      ? {
                          label: props.ingredients.find(
                            (ingredient) =>
                              ingredient.ingredient === item.ingredient
                          ).measure,
                          value: props.ingredients.find(
                            (ingredient) =>
                              ingredient.ingredient === item.ingredient
                          ).measure,
                        }
                      : { label: item.measure, value: item.measure }
                  }
                  onValueChange={handleMeasureChange}
                  index={index}
                  isDisabled={
                    props.ingredients.find(
                      (ingredient) => ingredient.ingredient === item.ingredient
                    ) !== undefined
                  }
                />
              </div>
            );
          })}
          <br />
          <label htmlFor="steps">
            Steps <span className={styles.required}>*</span>
          </label>
          <br />
          <textarea
            rows={5}
            cols={100}
            id="steps"
            name="steps"
            placeholder="Separate each step into its own line"
            value={steps}
            onChange={(event) => handleChange(event, setSteps)}
            required
          />
          <br />
          <button
            type="submit"
            onClick={() => {
              props.setIsFormVisible(false);
              handleSubmit();
            }}
          >
            Submit
          </button>
        </div>
      }
    ></PopUpWindow>
  );
}
