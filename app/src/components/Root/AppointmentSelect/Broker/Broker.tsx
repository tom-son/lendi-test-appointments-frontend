import React from "react";
import BrokerAppointment from "../../../../handlers/BrokerAppointment";

export interface BrokerProps {
  broker: BrokerAppointment;
}

const Broker = (broker: BrokerProps) => {
  return (
    <li>
      [broker name]
      <br />
      appointments:
      <button>Hide appointments</button>
      <ul>
        <li>[appointment date]</li>
      </ul>
    </li>
  );
};

export default Broker;
