import { useForm } from "react-hook-form";
import FormInput9 from "./FormInput9";
import PropTypes from "prop-types";

const FormExercise9 = (props) => {
  const { addAppointment } = props;
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    reset,
  } = useForm();

  const handleSubmit = (data) => {
    addAppointment(data);
    reset();
  };

  return (
    <form onSubmit={onSubmitRHF(handleSubmit)}>
      <div className="div-form-9 row g-3 mt-1">
        <div className="col-12">
          <FormInput9
            className="mb-3"
            error={errors.petname}
            label="Nombre de mascota:"
            name="petname"
            placeholder="nombre de mascota"
            options={{
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 10,
                message: "El nombre debe tener un maximo de 10 caracteres",
              },
            }}
            register={register}
          />
        </div>
        <div className="col-12">
          <FormInput9
            className="mb-3"
            error={errors.username}
            label="Nombre de dueño:"
            name="username"
            placeholder="nombre de dueño"
            options={{
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 10,
                message: "El nombre debe tener un maximo de 10 caracteres",
              },
            }}
            register={register}
          />
        </div>
        <div className="col-md-6">
          <FormInput9
            className="mb-3"
            error={errors.date}
            label="Fecha:"
            name="date"
            type="date"
            options={{
              required: {
                value: true,
                message: "Este campo es requerido",
              },
            }}
            register={register}
          />
        </div>
        <div className="col-md-6">
          <FormInput9
            className="mb-3"
            error={errors.time}
            label="Hora:"
            name="time"
            type="time"
            options={{
              required: {
                value: true,
                message: "Este campo es requerido",
              },
            }}
            register={register}
          />
        </div>
        <div className="col-12">
          <FormInput9
            className="mb-3"
            error={errors.symptoms}
            label="Sintomas:"
            name="symptoms"
            placeholder="describir sintomas"
            options={{
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres",
              },
            }}
            register={register}
          />
        </div>
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-primary mb-3" type="submit">
          Agregar nueva cita
        </button>
      </div>
    </form>
  );
};
export default FormExercise9;

FormExercise9.propTypes = {
  addAppointment: PropTypes.func.isRequired,
};
