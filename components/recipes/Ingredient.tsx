import Image from "next/image";

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

export default function Ingredient(props: { ingredient: IngredientItem }) {
  const buttonSize = 20;
  return (
    <div className={`${utilStyles.rowStack} ${utilStyles.container}`}>
      <label>{props.ingredient.ingredient}</label>
      <span className={styles.button}>
        <Image 
        src={minus}
        alt="minus"
        width={buttonSize}
        height={buttonSize}
        />
      </span>
    
      <input className={styles.input} type="number" value={props.ingredient.amount} />
      
      <span className={styles.button}>
        <Image 
        src={plus}
        alt="plus"
        width={buttonSize}
        height={buttonSize}
        />
      </span>     
      <p>{props.ingredient.measure}</p>
    </div>
  );
}
