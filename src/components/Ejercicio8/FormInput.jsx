import PropTypes from "prop-types";

const FormInput = (props) => {
  const {
    name,
    type = "text",
    label,
    error,
    className = "",
    register,
    options,
    placeholder = "Ingrese un texto",
  } = props;

  return (
    <fieldset className={`form-floating ${className}`}>
      <input
        type={type}
        className={`form-control ${error ? "is-invalid" : ""}`}
        id={` ${name}-input`}
        {...register(name, options)}
        placeholder={placeholder}
      />
      <label htmlFor={`${name}-input`}>{label}</label>
      <div className="invalid-feedback">{error?.message}</div>
    </fieldset>
  );
};
export default FormInput;

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  className: PropTypes.string,
  register: PropTypes.func.isRequired,
  options: PropTypes.object,
  placeholder: PropTypes.string,
};
