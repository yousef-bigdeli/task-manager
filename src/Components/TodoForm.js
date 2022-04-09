import { useEffect, useRef, useState } from "react";
import { FaPlus, FaCheck } from "react-icons/fa";

const TodoForm = ({ addTodoHandler, edit = {} }) => {
  const [inputValue, setInputValue] = useState(edit.text ? edit.text : "");
  const inputRef = useRef();

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

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <form onSubmit={submitHandler} className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={changeHandler}
        className="todo-input"
        placeholder="Enter todo name..."
        ref={inputRef}
      />
      <button type="submit">{edit.id ? <FaCheck /> : <FaPlus />}</button>
    </form>
  );
};

export default TodoForm;
