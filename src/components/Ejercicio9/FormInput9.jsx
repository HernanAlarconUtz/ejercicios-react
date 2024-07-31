import PropTypes from "prop-types";

const FormInput9 = (props) => {
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
    // <fieldset className={`form-floating ${className}`}>
    <div className={`d-flex align-items-baseline ${className}`}>
      <label className="me-2" htmlFor={`${name}-input`}>{label}</label>
      <div className="flex-grow-1">
      <input
        type={type}
        className={`w-75 form-control ${error ? "is-invalid" : ""}`}
        id={` ${name}-input`}
        {...register(name, options)}
        placeholder={placeholder}
      />
      <div className="invalid-feedback">{error?.message}</div>
      </div>
  </div>
   
   
  );
};
export default FormInput9;

FormInput9.propTypes = {
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
