import { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";
import FormExercise9 from "./FormExercise9";

import "./style9.css";

const Ejercicio9 = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointment =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointment);
  }, []);

  const addAppointment = (newAppointment) => {
    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  const deleteAppointment = (index) => {
    const updateAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updateAppointments);
    localStorage.setItem("appointments", JSON.stringify(updateAppointments));
  };

  return (
    <>
      <section className="container mt-5 bg-body-tertiary rounded text-center shadow">
        <h6 className="p-2 text-start m-0">
          Llenar el formulario para crear una cita
        </h6>
        <hr className="m-0" />
        <FormExercise9 addAppointment={addAppointment} />
      </section>
      <section className="container">
        <AppointmentCard
          appointments={appointments}
          deleteAppointment={deleteAppointment}
        />
      </section>
    </>
  );
};
export default Ejercicio9;
