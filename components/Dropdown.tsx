import Select from "react-select/async";
import { useState } from "react";

export default function Dropdown({ optionsList, handleSelectChange, selected }) {

    const filterIngredients = (inputValue: string) => {
        return optionsList.filter((i) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };
      
    const loadOptions = (inputValue, callback) => {
        callback(filterIngredients(inputValue));
      };
    
    return (
        <Select
          cacheOptions
          defaultOptions={optionsList}
          loadOptions={loadOptions}
          isSearchable
          isClearable
          isMulti
          onChange={handleSelectChange}
          value={selected}
        />
      );;
}