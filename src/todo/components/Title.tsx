import { useTodos } from "../hooks/useTodos"



export default function Title() {

    const { pendingTodos } = useTodos();

  return (
    <h1>
      Todos pending: { pendingTodos }
    </h1>
  )
}
