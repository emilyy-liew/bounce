import Image from "next/image";
import { useEffect, useState } from "react";

import minus from "../../public/images/minus.png";
import plus from "../../public/images/plus.png";

import styles from "../../styles/Ingredient.module.css";
import utilStyles from "../../styles/utils.module.css";

export interface IngredientItem {
  ingredient: string;
  amount: number;
  measure: string;
}

// enum Measures {
//     cup,
//     tablespoon,
//     teaspoon,
//     cloves,
//     unit
//   }

export default function Ingredient(props: {
  ingredient: IngredientItem;
  onPlusClick: () => void;
  onMinusClick: () => void;
}) {
  const [amount, setAmount] = useState<number>(props.ingredient.amount);
  const buttonSize = 20;

  useEffect(() => {
    setAmount(props.ingredient.amount);
  }, [props.ingredient.amount]);

  return (
    <div className={`${utilStyles.rowStack} ${styles.container}`}>
      <label className={`${styles.label} ${styles.element}`}>
        {props.ingredient.ingredient}:
      </label>
      <span className={`${styles.button} ${styles.element}`}>
        <Image
          src={minus}
          alt="minus"
          width={buttonSize}
          height={buttonSize}
          onClick={props.onMinusClick}
        />
      </span>

      <input
        className={`${styles.input} ${styles.element}`}
        type="number"
        value={amount}
      />

      <span className={`${styles.button} ${styles.element}`}>
        <Image
          src={plus}
          alt="plus"
          width={buttonSize}
          height={buttonSize}
          onClick={props.onPlusClick}
        />
      </span>
      <p>{props.ingredient.measure}</p>
    </div>
  );
}
