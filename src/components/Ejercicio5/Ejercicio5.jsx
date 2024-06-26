import { useEffect, useRef, useState } from "react";
import { Tarea } from "./Tarea";

const Ejercicio5 = () => {
  const [todos, setTodos] = useState([]);

  const $inputTodos = useRef();

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const newTodoNombre = $inputTodos.current.value;

      if (newTodoNombre.trim()) {
        const newTodo = new Tarea(newTodoNombre);
        const newArray = [...todos, newTodo];
        setTodos(newArray);

        $inputTodos.current.value = "";
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <section className="bg-danger w-50 rounded">
        <div className="text-center">
          <h1 className="mt-3">Bienvenido</h1>
          <h5 className="mb-3">Ingrese tus tareas:</h5>
          <div className="d-flex justify-content-center">
            <input
              className="form-control w-75"
              type="text"
              onKeyDown={handleKeyDown}
              ref={$inputTodos}
            />
          </div>
        </div>

        <ul className="text-start list-unstyled p-3">
          {todos.map((todo) => {
            return (
              <li className="border p-2 m-2" key={todo.id}>
                {todo.nombre}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
export default Ejercicio5;
