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

  const appointmentsVisibilityToggler = appointmentVisibility
    ? <button data-testid="broker-hide-appointments-button" onClick={toggleAppointmentVisibility} type="button" >Hide appointments</button>
    : <button data-testid="broker-show-appointments-button" onClick={toggleAppointmentVisibility} type="button" >Show appointments</button>;

  const appointmentList = (appointmentDateListItems.length > 0)
  ? (
    <>
      {appointmentVisibility &&
          <ul data-testid="broker-appointments-list">
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
      {(appointmentDateListItems.length > 0) && appointmentsVisibilityToggler}
      appointments:
      {appointmentList}
    </li>
  );
};

export default Broker;
