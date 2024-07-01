import PropTypes from "prop-types";
import ColorInput from "./ColorInput";

const ColorCard = ({ color, setColors }) => {
  const handleDelete = () => {
    setColors((prevColors) =>
      prevColors.filter((prevColor) => prevColor.id !== color.id)
    );
  };

  return (
    <article className="col-12 col-md-4 mb-3">
      <div className="card p-2 h-100 d-flex flex-column justify-content-between align-items-center">
        <div>
          <h4 className="fw-bold">{color.value}</h4>
          <ColorInput color={color.value} disabled />
        </div>
        <div className="text-end">
          <button className="btn btn-danger btn-sm" onClick={handleDelete}>
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
};

export default ColorCard;

ColorCard.propTypes = {
  color: PropTypes.object.isRequired,
  setColors: PropTypes.func.isRequired,
};
