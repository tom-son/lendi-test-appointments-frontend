import React, {useState} from "react";
import BrokerAppointment from "../../../../handlers/BrokerAppointment";
import Appointment from "../../../../types/Appointment";
import styled from "styled-components";

export interface BrokerProps {
  broker: BrokerAppointment;
  selectAppointment: (appointment: Appointment) => void;
}

const AppointmentListItem = styled.li`
  cursor: pointer;
`;

const Broker = (props: BrokerProps) => {
  const [appointmentVisibility, setAppointmentVisibility] = useState(true);
  const appointmentDateListItems = props.broker.appointments.map(appointment =>
    <AppointmentListItem key={appointment.id} onClick={() => props.selectAppointment(appointment)}>
      {appointment.date}
    </AppointmentListItem>);

  const toggleAppointmentVisibility = () => {
    setAppointmentVisibility(!appointmentVisibility);
  }

  const appointmentVisibilityButtonName = appointmentVisibility ? "Hide appointments" : "Show appointments";
  const appointmentList = (appointmentDateListItems.length > 0)
  ? (
    <>
      <button onClick={toggleAppointmentVisibility} type="button" >{appointmentVisibilityButtonName}</button>
      {appointmentVisibility &&
          <ul>
            {appointmentDateListItems}
          </ul>
      }
    </>
  )
  : <div>No appointments.</div>;
  return (
    <li>
      {props.broker.name}
      <br />
      appointments:
      {appointmentList}
    </li>
  );
};

export default Broker;
