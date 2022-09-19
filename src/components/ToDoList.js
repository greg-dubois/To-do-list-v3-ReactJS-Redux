import ToDoItem from "./ToDoItem";
import classes from "./ToDoList.module.css";
import { useSelector } from "react-redux";

const ToDoList = () => {
  const todos = useSelector((state) => state.todo.todos);

  // todos.forEach((todo) => {
  //   console.log(todo.id);
  // });

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            date={todo.date}
          />
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
