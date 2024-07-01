import { useForm } from "react-hook-form";
import FormInput from "./FormInput";

const FormExercise8 = () => {
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    reset,
  } = useForm();

  const handleSubmit = (data) => {
    const fieldsComplete = Object.values(data).every((field) => field);

    if (fieldsComplete) {
      alert("Datos enviados");
      console.log(data);
      reset();
    } else {
      alert("Completar todos los datos");
    }
  };

  return (
    <form onSubmit={onSubmitRHF(handleSubmit)}>
      <FormInput
        className="mb-3"
        error={errors.username}
        label="Nombre"
        name="username"
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
      <FormInput
        className="mb-3"
        error={errors.userlastname}
        label="Apellido"
        name="userlastname"
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
      <FormInput
        className="mb-3"
        error={errors.userdni}
        label="DNI"
        name="userdni"
        options={{
          required: {
            value: true,
            message: "Este campo es requerido",
          },
          maxLength: {
            value: 8,
            message: "El DNI debe tener un maximo de 8 caracteres",
          },
        }}
        register={register}
      />
      <FormInput
        className="mb-3"
        error={errors.useremail}
        label="Email"
        name="useremail"
        options={{
          required: {
            value: true,
            message: "Este campo es requerido",
          },
          maxLength: {
            value: 20,
            message: "Debe tener máximo 20 caracteres",
          },
        }}
        register={register}
        type="email"
      />
      <div className="text-end">
        <button className="btn btn-primary mb-3" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
};
export default FormExercise8;
