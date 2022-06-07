import React from "react";
import BrokerAppointment from "../../../../handlers/BrokerAppointment";

export interface BrokerProps {
  broker: BrokerAppointment;
}

const Broker = (props: BrokerProps) => {
  const appointmentDateListItems = props.broker.appointments.map(appointment => <li>{appointment.date}</li>);

  return (
    <li>
      {props.broker.name}
      <br />
      appointments:
      <button>Hide appointments</button>
      <ul>
        {appointmentDateListItems}
      </ul>
    </li>
  );
};

export default Broker;
