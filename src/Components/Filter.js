import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "all", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "uncompleted", label: "Uncompleted" },
];

const FilterComponent = ({setTodosFilter}) => {
  const [filter, setFilter] = useState({ value: "all", label: "All" });

  const filterChangeHandler = (selectedOption) => {
    setFilter(selectedOption);
    setTodosFilter({ type:selectedOption.value, isFilter: true });
  };
  return (
    <div className='filter'>
      <Select options={options} value={filter} onChange={filterChangeHandler} />
    </div>
  );
};

export default FilterComponent;
