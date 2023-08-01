import { use, useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { OptionItem } from "./Dropdown";

import styles from "../styles/CreatableDropdown.module.css";

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
});

export default function CreatableDropdown(props: {
  defaultOptions: any;
  value;
  onValueChange;
  index: number;
  isDisabled: boolean;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<OptionItem[]>(props.defaultOptions);
  const [value, setValue] = useState<OptionItem | null>(props.value);

  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
      props.onValueChange(newOption, props.index);
      setValue(newOption);
    }, 1000);
  };

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <span className={styles.dropdownContainer}>
      <CreatableSelect
        isClearable
        isDisabled={props.isDisabled || isLoading}
        isLoading={isLoading}
        onChange={(newValue: OptionItem) => {
          props.onValueChange(newValue, props.index);
        }}
        onCreateOption={handleCreate}
        options={options}
        value={value}
        isSearchable
      />
    </span>
  );
}
