import PropTypes from "prop-types";
import ColorCard from "./ColorCard";

const ColorList = ({ colors, setColors }) => {
  return (
    <section className="row mt-3 w-50">
      {colors.map((color) => (
        <ColorCard key={color.id} color={color} setColors={setColors} />
      ))}
    </section>
  );
};

export default ColorList;

ColorList.propTypes = {
  colors: PropTypes.array.isRequired,
  setColors: PropTypes.func.isRequired,
};