import PropTypes from "prop-types";

import "./style.css";

const ColorInput = (props) => {
  const { color, setColor, disabled = false } = props;

  const handleChange = (e) => {
    if (!disabled) {
      setColor(e.target.value);
    }
  };

  return (
    <input
      value={color}
      onChange={handleChange}
      type="color"
      className="color-picker"
      disabled={disabled}
    />
  );
};
export default ColorInput;

ColorInput.propTypes = {
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};