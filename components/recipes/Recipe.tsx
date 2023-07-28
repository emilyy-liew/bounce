import Collapsible from "../Collapsible";

export interface RecipeItem {
    ID: string;
    "recipe title": string;
    ingredients: object;
    steps: string[];
}

export default function Recipe(props: { recipe: RecipeItem }) {
    return <Collapsible 
        children={props.recipe.steps.map((step, index) => {
            return (
                <div className={step}>
                    <p>{index + 1}: {step}</p>
                </div>
            );
        })}
        label={<span>{props.recipe["recipe title"]}</span>}
        visible={false}
        />
}