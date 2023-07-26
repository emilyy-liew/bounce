import { Header, Subheader1 } from "../components/Headers";
import Inventory from "../components/recipes/Inventory";

export default function Recipes(props: { user: any }) {
  return (
    <div>
      <Header title="Recipes. 🥘" />
      <Subheader1 title="Inventory." />
      <Inventory />
      <Subheader1 title="Recipes." />
      <Subheader1 title="Grocery List." />
    </div>
  );
}
