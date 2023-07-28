import Image from "next/image";

import Collapsible from "../Collapsible";
import check from "../../public/images/plus.png";
import x from "../../public/images/minus.png";

import utilStyles from "../../styles/utils.module.css";
import { IngredientItem } from "./Ingredient";

export interface RecipeItem {
  ID: string;
  "recipe title": string;
  ingredients: { amount: number };
  steps: string[];
  isDoable: boolean;
}

export default function Recipe(props: {
  recipe: RecipeItem;
  ingredients: IngredientItem[];
}) {
  const recipeIngredients = Object.entries(props.recipe.ingredients);
  const ingredientList = recipeIngredients.map(([ingredient, amount]) => (
    <p>{`${amount} ${
      props.ingredients.find((item) => item.ingredient === ingredient).measure
    } ${ingredient}`}</p>
  ));

  const steps = props.recipe.steps.map((step, index) => {
    return (
      <div className={step}>
        <p>
          {index + 1}: {step}
        </p>
      </div>
    );
  });

  const children = [...ingredientList, <br />, ...steps].map((item) => item);

  return (
    <Collapsible
      children={children}
      label={
        <span className={utilStyles.equalSpace}>
          <p>{props.recipe["recipe title"]}</p>
          <Image
            src={props.recipe.isDoable ? check : x}
            width={20}
            height={20}
            alt="check"
          />
        </span>
      }
      visible={false}
    />
  );
}
