import PropTypes from "prop-types";

const AppointmentCard = (props) => {
  const { appointments, deleteAppointment } = props;

  return (
    <div className="mt-3">
      {appointments.length === 0 ? (
        <div className="alert alert-info">No hay citas</div>
      ) : (
        <div className="row">
          {appointments.map((appointment, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card shadow">
                <div className="card-title">
                  <p className="card-text">
                    Nombre de mascota: {appointment.petname}
                  </p>
                  <p className="card-text">
                    Nombre de dueño: {appointment.username}
                  </p>
                </div>
                <div className="card-body div-form-9">
                  <p className="card-text">Fecha: {appointment.date}</p>
                  <p className="card-text">Hora: {appointment.time}</p>
                  <p className="card-text">Síntomas: {appointment.symptoms}</p>
                </div>
                <div className="text-end my-3">
                  <button
                    className="btn btn-danger me-3"
                    onClick={() => deleteAppointment(index)}
                  >
                    Borrar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default AppointmentCard;

AppointmentCard.propTypes = {
  appointments: PropTypes.array.isRequired,
  deleteAppointment: PropTypes.func.isRequired,
};
