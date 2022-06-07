import styled from "styled-components";
import BrokerComponent from "./Broker";
import {useContext, useEffect, useState} from "react";
import BrokerAppointment from "../../../types/BrokerAppointment";
import AppointmentDetailsPanel from "./AppointmentDetailsPanel";
import Appointment from "../../../types/Appointment";
import Broker from "../../../types/Broker";
import {ComponentsContext} from "../../../stores/ComponentsStore";

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
  const componentsContext = useContext(ComponentsContext);

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
            <BrokerComponent key={broker.id} broker={broker}/>
          ))}
        </ul>
      </SideBar>
      <div>
        {componentsContext.appointmentSelected &&
            <AppointmentDetailsPanel appointment={componentsContext.appointmentSelected}/>}
      </div>
    </Wrapper>
  );
};

export default AppointmentSelect;
