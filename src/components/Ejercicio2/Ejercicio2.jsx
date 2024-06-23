import PropTypes from "prop-types"

const Ejercicio2 = (props) => {
    const {message} = props;

  return (
    <h1 className="text-danger text-center mt-5">Hello {message}</h1>
  )
}

Ejercicio2.propTypes = {
    message: PropTypes.string.isRequired
}


export default Ejercicio2