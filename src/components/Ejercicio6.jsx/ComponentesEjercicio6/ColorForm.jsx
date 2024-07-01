import PropTypes from "prop-types";

import ColorInput from "./ColorInput";
import { useState } from "react";

const ColorForm = (props) => {
  const { setColors } = props;

  const [color, setColor] = useState("#000000");

  const handleSubmit = (e) => {
    e.preventDefault();
    setColors((prevColors) => [
      ...prevColors,
      {
        id: window.self.crypto.randomUUID(),
        value: color,
      },
    ]);
  };

  return (
    <form className="card w-50 py-3" onSubmit={handleSubmit}>
      <div className="card-header">
        <h3>Administrar colores</h3>
      </div>
      <div className="card-body d-flex justify-content-center align-item-center gap-5">
        <ColorInput color={color} setColor={setColor} />
        <div>
          <p className="mb-0">{color}</p>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-end container">
        <button className="btn btn-primary" type="submit">
          Guardar
        </button>
      </div>
    </form>
  );
};
export default ColorForm;

ColorForm.propTypes = {
  setColors: PropTypes.func.isRequired,
};
