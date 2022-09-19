import classes from "./ToDoItem.module.css";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todoSlice";

const ToDoItem = (props) => {
  const dispatch = useDispatch();

  const { id, text, date } = props;

  const removeHandler = () => {
    dispatch(todoActions.removeToDoHandler(id));
  };

  return (
    <li onClick={removeHandler}>
      TASK: {text} <br /> COMPLETE BY: {date}
    </li>
  );
};

export default ToDoItem;
