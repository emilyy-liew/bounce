import Select from "react-select/async";

export interface OptionItem {
  label: string;
  value: string;
}

export default function Dropdown(props: {
  optionsList: OptionItem[];
  selected: OptionItem[];
  handleSelectChange: (selectedOptions: OptionItem[]) => void;
}) {
  const filterIngredients = (inputValue: string) => {
    return props.optionsList.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue: string, callback: any) => {
    callback(filterIngredients(inputValue));
  };

  return (
    <Select
      cacheOptions
      defaultOptions={props.optionsList}
      loadOptions={loadOptions}
      isSearchable
      isClearable
      isMulti
      onChange={props.handleSelectChange}
      value={props.selected}
    />
  );
}
