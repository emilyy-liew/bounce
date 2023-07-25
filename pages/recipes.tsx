import { Authenticator } from "@aws-amplify/ui-react";

import Layout from "../components/Layout";
import { Header, Subheader1} from "../components/Headers";
import { getIngredients } from "../functions/serverRequests";
import Dropdown from "../components/Dropdown";

import utilStyles from "../styles/utils.module.css";
import styles from "../styles/recipes.module.css";
import { useEffect, useState } from "react";

export default function Recipes() {
    const [ingredients, setIngredients] = useState([]);
    const [myIngredients, setMyIngredients] = useState([]);
    const [selected, setSelected] = useState([]);

    const handleSelectChange = (selectedOption) => {
        setSelected(selectedOption);
      }

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
        const newMyIngredients = selected.map((item) => {
            return {
                ingredient: item.label,
                amount: 0,
                measure: ingredients.find((ingredient) => ingredient.ingredient === item.label).measure
            }
        })

        let currentIngredients = myIngredients.slice();
        currentIngredients = [...currentIngredients, ...newMyIngredients];
        setMyIngredients(currentIngredients);
        setSelected([]);
    }
    console.log(myIngredients)
    
    return (
        <Authenticator>
            {({ signOut, user }) => (
                <Layout signOut={signOut}>
                    <Header title="Recipes. 🥘" />
                    <Subheader1 title="Inventory." />
                    <div className={utilStyles.rowStack}>
                    <Dropdown selected={selected} handleSelectChange={handleSelectChange} optionsList={ingredients.map((item) => {
                        return {
                            label: item.ingredient, value: item.ingredient
                            }
                            })} />
                    <button onClick={handleAddClick}>Add</button>
                    {myIngredients.map((item) => <p>{`${item.ingredient}: ${item.amount} ${item.measure}`}</p>)}
                    

                        {/* <AsyncSelect

                        /> */}
                        {/* <input
                        type="date"
                        value={deadline}
                        onChange={(event) => handleChange(event, setDeadline)}
                        onKeyDown={(event) => handleKeyDown(event)}
                        className={styles.dateInput}
                        />
                        <input
                        type="number"
                        placeholder="Enter task duration in mins"
                        min="0"
                        value={duration}
                        onChange={(event) => handleChange(event, setDuration)}
                        onKeyDown={(event) => handleKeyDown(event)}
                        className={styles.number}
                        /> */}
                    </div>
                    <Subheader1 title="Recipes." />
                    <Subheader1 title="Grocery List." />
                </Layout>
            )}
        </Authenticator>
    );
}