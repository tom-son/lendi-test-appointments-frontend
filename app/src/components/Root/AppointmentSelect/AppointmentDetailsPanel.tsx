import styled from "styled-components";
import Appointment from "../../../types/Appointment";

/**
 * Display information about a broker's appointment
 */
interface AppointmentDetailsPanelProps {
  appointment: Appointment;
}

const Heading = styled.strong.attrs({ role: "heading", level: 2 })`
  display: block;
  font-size: 20px;
`;

const AppointmentDetailsPanel = (props: AppointmentDetailsPanelProps) => {
  const propertyListItems = Object.keys(props.appointment).map(propertyName =>
    <li key={propertyName}>{propertyName}: {props.appointment[propertyName as keyof Appointment]}</li>);
  return (
    <div>
      <Heading>Appointment details</Heading>
      <ul>
        {propertyListItems}
      </ul>
    </div>
  );
}

export default AppointmentDetailsPanel;
