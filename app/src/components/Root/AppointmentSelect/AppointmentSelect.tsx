import styled from "styled-components";
import BrokerComponent from "./Broker";
import {useEffect, useState} from "react";
import BrokerAppointment from "../../../types/BrokerAppointment";
import AppointmentDetailsPanel from "./AppointmentDetailsPanel";
import Appointment from "../../../types/Appointment";
import Broker from "../../../types/Broker";

interface AppointmentSelectProps {
  appointments: Appointment[];
  brokers: Broker[];
}

const Wrapper = styled.div`
  display: flex;
`;

const SideBar = styled.div`
  width: 250px;
`;

const Heading = styled.strong.attrs({ role: "heading", level: 2 })`
  display: block;
  font-size: 20px;
`;

const AppointmentSelect = (props: AppointmentSelectProps) => {
  const [brokerAppointments, setBrokerAppointments] = useState<BrokerAppointment[]>([]);
  const [appointmentSelected, setAppointmentSelected] = useState<Appointment>();

  useEffect(() => {
    const aggregateAndSetBrokerAppointments = async () => {
      const brokerAppointmentAggregates = props.brokers.map(broker => {
        const appointmentsForBroker = props.appointments.filter(appointment =>
          appointment.brokerId === broker.id);
        return {
          ...broker,
          appointments: appointmentsForBroker
        };
      });

      setBrokerAppointments(brokerAppointmentAggregates);
    }

    aggregateAndSetBrokerAppointments();
  }, []);


  return (
    <Wrapper>
      <SideBar>
        <Heading>Amazing site</Heading>
        <ul>
          {brokerAppointments.map((broker) => (
            <BrokerComponent key={broker.id} broker={broker} selectAppointment={setAppointmentSelected} />
          ))}
        </ul>
      </SideBar>
      <div>
        {appointmentSelected && <AppointmentDetailsPanel appointment={appointmentSelected}/>}
      </div>
    </Wrapper>
  );
};

export default AppointmentSelect;
