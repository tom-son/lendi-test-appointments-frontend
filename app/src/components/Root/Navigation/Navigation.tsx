import React, {useContext} from "react";
import styled from "styled-components";
import {ComponentsContext} from "../../../stores/ComponentsStore";
import {EntitiesContext} from "../../../stores/EntitiesStore";

const Wrapper = styled.div`
  background-color: #e7e7e7;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  padding: 24px 48px;
  box-shadow: 1px 1px 1px #b8b8b8;
  margin-bottom: 48px;
`;

const Navigation = () => {
  const componentContext = useContext(ComponentsContext);

  const entitiesContext = useContext(EntitiesContext);
  const brokerForAppointment = entitiesContext.brokers?.find(broker =>
    broker.id === componentContext.appointmentSelected?.brokerId);

  if (!componentContext.appointmentSelected || !brokerForAppointment) {
    return (
      <Wrapper>
        <strong>
          Currently selected appointment: No appointment selected
        </strong>
        <strong>Welcome to Lendi</strong>
      </Wrapper>
    );
  }
  else {
    return (
      <Wrapper>
        <strong>
          Currently selected appointment: {componentContext.appointmentSelected?.date} with {brokerForAppointment?.name}
        </strong>
        <strong>Welcome to Lendi</strong>
      </Wrapper>
    );
  }
};

export default Navigation;
