import React, {useState} from "react";
import BrokerAppointment from "../../../../handlers/BrokerAppointment";

export interface BrokerProps {
  broker: BrokerAppointment;
}

const Broker = (props: BrokerProps) => {
  const [appointmentVisibility, setAppointmentVisibility] = useState(true);
  const appointmentDateListItems = props.broker.appointments.map(appointment =>
    <li key={appointment.id}>{appointment.date}</li>);

  const toggleAppointmentVisibility = () => {
    setAppointmentVisibility(!appointmentVisibility);
  }

  const appointmentVisibilityButtonName = appointmentVisibility ? "Hide appointments" : "Show appointments";

  return (
    <li>
      {props.broker.name}
      <br />
      appointments:
      <button onClick={toggleAppointmentVisibility} type="button" >{appointmentVisibilityButtonName}</button>
      {appointmentVisibility &&
        <ul>
          {appointmentDateListItems}
        </ul>
      }
    </li>
  );
};

export default Broker;
