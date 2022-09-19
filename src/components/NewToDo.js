import { useRef } from "react";
import classes from "./NewToDo.module.css";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todoSlice";

const NewToDo = () => {
  const todoTextRef = useRef();
  const todoDateRef = useRef();

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    const newDate = new Date(todoDateRef.current.value);
    const formattedDate = newDate.toDateString();
    const newID = Math.random();
    dispatch(
      todoActions.addToDoHandler({
        id: newID,
        text: todoTextRef.current.value,
        date: formattedDate,
      })
    );
    // props.onAddToDo(todoTextRef.current.value, formattedDate);
    todoTextRef.current.value = "";
    todoDateRef.current.value = "";
  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler}>
        <label htmlFor="todo">TASK:</label>
        <input type="text" name="todo" ref={todoTextRef} />
        <label htmlFor="todoDate">COMPLETE BY:</label>
        <input type="date" ref={todoDateRef} name="todoDate" />
        <button> ADD +</button>
      </form>
    </div>
  );
};
export default NewToDo;
