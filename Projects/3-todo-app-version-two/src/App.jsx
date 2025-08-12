import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "20/11/2024",
    },
    {
      name: "Go to college",
      dueDate: "20/11/2024",
    },
    {
      name: "Go to canteen",
      dueDate: "22/11/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems  todoItems={todoItems} />
      
    </center>
  );
}

export default App;
