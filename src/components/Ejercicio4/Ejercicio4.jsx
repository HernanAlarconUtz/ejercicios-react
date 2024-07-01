import { useRef, useState } from "react";

const Ejercicio4 = () => {
  const [todos, setTodos] = useState([]);

  const $inputTodos = useRef();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const newTodo = $inputTodos.current.value;

      if (newTodo.trim()) {
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
        <input className="form-control w-75" type="text" onKeyDown={handleKeyDown} ref={$inputTodos} />
        </div>
      </div>

      <ul className="text-start list-unstyled p-3">
        {todos.map((todo, index) => {
          return <li className="border p-2 m-2" key={index}>{todo}</li>;
        })}
      </ul>
    </section>
    </div>
  );
};
export default Ejercicio4;
