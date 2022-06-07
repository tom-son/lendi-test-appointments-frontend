import React, {useContext, useState} from "react";
import BrokerAppointment from "../../../../types/BrokerAppointment";
import styled from "styled-components";
import {ComponentsContext} from "../../../../stores/ComponentsStore";

export interface BrokerProps {
  broker: BrokerAppointment;
}

const AppointmentListItem = styled.li`
  cursor: pointer;
`;

const Broker = (props: BrokerProps) => {
  const [appointmentVisibility, setAppointmentVisibility] = useState(true);
  const componentsContext = useContext(ComponentsContext);

  const appointmentDateListItems = props.broker.appointments.map(appointment =>
    <AppointmentListItem key={appointment.id} onClick={() => componentsContext.setAppointmentSelected(appointment)}>
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
