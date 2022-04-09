import { useState } from "react";

const TodoForm = ({ addTodoHandler, initialValue = "", edit = {} }) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (edit.id) {
      addTodoHandler(inputValue, edit.id);
    } else {
      addTodoHandler(inputValue);
    }
    setInputValue("");
  };
  
  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={inputValue} onChange={changeHandler} />
      <button type="submit">{edit.id ? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
