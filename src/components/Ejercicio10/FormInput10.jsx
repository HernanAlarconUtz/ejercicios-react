import PropTypes from "prop-types";

const FormInput10 = ({
  name,
  type = "text",
  label,
  error,
  className = "",
  register,
  options,
  placeholder = "Ingrese un texto",
  textarea,
  select,
  selectOptions = [],
}) => {
  const inputProps = {
    type: type,
    className: `form-control ${error ? "is-invalid" : ""}`,
    id: `${name}-input`,
    ...register(name, options),
    placeholder: placeholder,
  };

  if (textarea) {
    return (
      <div className={`mb-3 ${className}`}>
        <label htmlFor={`${name}-input`} className="form-label">
          {label}
        </label>
        <textarea {...inputProps} />
        <div className="invalid-feedback">{error?.message}</div>
      </div>
    );
  }

  if (select) {
    return (
      <div className={`mb-3 ${className}`}>
        <label htmlFor={`${name}-input`} className="form-label">
          {label}
        </label>
        <select {...inputProps}>
          <option value="">Seleccione un género</option>
          {selectOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="invalid-feedback">{error?.message}</div>
      </div>
    );
  }

  return (
    <div className={`mb-3 ${className}`}>
      <label htmlFor={`${name}-input`} className="form-label">
        {label}
      </label>
      <input {...inputProps} />
      <div className="invalid-feedback">{error?.message}</div>
    </div>
  );
};

export default FormInput10;

FormInput10.propTypes = {
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
  textarea: PropTypes.bool,
  select: PropTypes.bool,
  selectOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};
