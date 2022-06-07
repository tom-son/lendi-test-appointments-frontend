import axios from "axios";
import styled from "styled-components";

import Broker from "./Broker";
import {useEffect, useState} from "react";
import BrokerAppointment from "../../../handlers/BrokerAppointment";
import BrokersHandler from "../../../handlers/BrokersHandler";
import AppointmentsHandler from "../../../handlers/AppointmentsHandler";

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
  const [brokerAppointments, setBrokerAppointments] = useState<BrokerAppointment[]>([])

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
            <Broker key={broker.id} broker={broker} />
          ))}
        </ul>
      </SideBar>
      <div>
        <Heading>Appointment details</Heading>
        TODO: get appointment details when clicking on one from the left side
      </div>
    </Wrapper>
  );
};

export default AppointmentSelect;
