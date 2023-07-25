
export interface IngredientItem {
    ingredient: string,
    amount: number,
    measure: string
}

// enum Measures {
//     cup,
//     tablespoon,
//     teaspoon,
//     cloves,
//     unit
//   }

export default function Ingredient(props: {
    ingredient: IngredientItem
}) {

    return (
        <div>
            <label>{props.ingredient.ingredient}</label>
            <button>Minus</button>
            <input type="number" value={props.ingredient.amount} />
            <button>Plus</button>
            <p>{props.ingredient.measure}</p>
        </div>
    )
}