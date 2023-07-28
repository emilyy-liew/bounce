import { Header, Subheader1 } from "../components/Headers";
import Inventory from "../components/recipes/Inventory";
import RecipeList from "../components/recipes/Recipes";

export default function RecipeDashboardPage(props: { user: any }) {
  return (
    <div>
      <Header title="Recipes. 🥘" />
      <Subheader1 title="Inventory." />
      <Inventory />
      <Subheader1 title="Recipes." />
      <RecipeList />
      <Subheader1 title="Grocery List." />
    </div>
  );
}
