import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import FormInput10 from "./FormInput10";

const FormExercise10 = (props) => {
  const { addMovies } = props;

  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    reset,
  } = useForm();

  const handleSubmit = (data) => {
    addMovies(data);
    reset();
  };

  return (
    <form onSubmit={onSubmitRHF(handleSubmit)} className="bg-body-tertiary rounded shadow mt-5">
      <fieldset>
        <FormInput10
          className="m-3"
          error={errors.moviename}
          label="Titulo de la pelicula:"
          name="moviename"
          placeholder="Harry Potter"
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
              value: 50,
              message: "El nombre debe tener un maximo de 50 caracteres",
            },
          }}
          register={register}
        />
      </fieldset>
      <fieldset>
        <FormInput10
          className="m-3"
          error={errors.moviedescription}
          label="Descripcion:"
          name="moviedescription"
          placeholder="Descripcion breve de la pelicula"
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
              value: 200,
              message: "La descripción debe tener un máximo de 200 caracteres",
            },
          }}
          register={register}
          textarea
        />
      </fieldset>
      <fieldset>
        <FormInput10
          className="m-3"
          error={errors.genre}
          label="Genero:"
          name="genre"
          placeholder="Seleccione un genero"
          options={{
            required: {
              value: true,
              message: "Este campo es requerido",
            },
          }}
          register={register}
          select
          selectOptions={[
            { value: "Comedia", label: "Comedia" },
            { value: "Drama", label: "Drama" },
            { value: "Infantil", label: "Infantil" },
          ]}
        />
      </fieldset>
      <div className="text-center mt-3">
        <button className="btn btn-primary mb-3" type="submit">
          Agregar nueva pelicula
        </button>
      </div>
    </form>
  );
};
export default FormExercise10;

FormExercise10.propTypes = {
  addMovies: PropTypes.func.isRequired,
};
