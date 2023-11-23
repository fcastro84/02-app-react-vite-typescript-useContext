
import TodoProvider from "./context/TodoProvider";

import TodoList from "./components/TodoList";
import Title from "./components/Title";


export default function Todo() {
  return (
    <TodoProvider>
      <Title />
      <TodoList />
    </TodoProvider>
  )
}
