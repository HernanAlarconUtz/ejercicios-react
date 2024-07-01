import PropTypes from "prop-types";

import "./style.css"

const EmployeesCard = (props) => {
  const { employee } = props;

  return (
    <li className="list-group-item d-flex align-items-center">
      <img
        src="https://lh5.googleusercontent.com/proxy/vvwOLNt8Fw3Y-Xh-dYA22da2Mbmw1dLW8vGY--JV1dgAy1KX7ZAL2G2v6aT41LSRC_-zA5vwXZQX22v1lPrAWOry_6WOfQIWkt6VjmlkmVrLsYLEy2NhZAlS"
        alt={employee.fullName}
        className="employee-img"
      />
      <div className="px-3">
        <h4>{employee.fullName}</h4>
        <div className="d-flex gap-2 allign-items-center">
            <h6 className="mb-0">{employee.title}</h6>
            <p className="bg-info text-light rounded px-2 fw-bold mb-0">{employee.department}</p>
        </div>
      </div>
    </li>
  );
};
export default EmployeesCard;

EmployeesCard.propTypes = {
  employee: PropTypes.object.isRequired,
};
