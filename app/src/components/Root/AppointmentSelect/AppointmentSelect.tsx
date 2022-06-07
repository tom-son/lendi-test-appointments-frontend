import styled from "styled-components";
import Broker from "./Broker";
import {useEffect, useState} from "react";
import BrokerAppointment from "../../../types/BrokerAppointment";
import BrokersHandler from "../../../handlers/BrokersHandler";
import AppointmentsHandler from "../../../handlers/AppointmentsHandler";
import AppointmentDetailsPanel from "./AppointmentDetailsPanel";
import Appointment from "../../../types/Appointment";

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

const AppointmentSelect = () => {
  const [brokerAppointments, setBrokerAppointments] = useState<BrokerAppointment[]>([]);
  const [appointmentSelected, setAppointmentSelected] = useState<Appointment>();

  useEffect(() => {
    const aggregateAndSetBrokerAppointments = async () => {
      const brokers = await BrokersHandler.getBrokers();
      const appointments = await AppointmentsHandler.getAppointments();
      const brokerAppointmentAggregates = brokers.map(broker => {
        const appointmentsForBroker = appointments.filter(appointment => appointment.brokerId === broker.id);
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
            <Broker key={broker.id} broker={broker} selectAppointment={setAppointmentSelected} />
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
