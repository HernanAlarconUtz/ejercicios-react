import { useEffect, useState } from "react";
import ColorForm from "./ComponentesEjercicio6/ColorForm";
import ColorList from "./ComponentesEjercicio6/ColorList";

const ColorsLS = JSON.parse(localStorage.getItem("colors")) || [];

const Ejercicio6 = () => {
  const [colors, setColors] = useState(ColorsLS);

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  return (
    <div className="d-flex flex-column align-items-center mt-3">
      <ColorForm setColors={setColors} />
      <ColorList colors={colors} setColors={setColors} />
    </div>
  );
};

export default Ejercicio6;