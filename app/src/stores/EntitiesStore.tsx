import React, {createContext, useState} from "react";
import Broker from "../types/Broker";
import BrokersHandler from "../handlers/BrokersHandler";
import Appointment from "../types/Appointment";
import AppointmentsHandler from "../handlers/AppointmentsHandler";

/**
 * Global store to provide REST entity data for application
 */
interface EntitiesStoreProps {
  children: React.ReactNode;
}

interface EntitiesContextProps {
  appointments: null | Appointment[];
  brokers: null | Broker[];
  loadAppointments: () => void;
  loadBrokers: () => void;
}

export const EntitiesContext = createContext<EntitiesContextProps>({
  appointments: null,
  brokers: null,
  loadAppointments: () => {},
  loadBrokers: () => {},
});

const EntitiesStore = (props: EntitiesStoreProps) => {
  const [appointments, setAppointments] = useState<null | Appointment[]>(null);
  const loadAppointments = async () => {
    const appointments = await AppointmentsHandler.getAppointments();
    setAppointments(appointments);
  }

  const [brokers, setBrokers] = useState<null | Broker[]>(null);
  const loadBrokers = async () => {
    const brokers = await BrokersHandler.getBrokers();
    setBrokers(brokers);
  }

  const store = {
    appointments,
    brokers,
    loadAppointments,
    loadBrokers,
  };
  return (
    <EntitiesContext.Provider value={store}>
      {props.children}
    </EntitiesContext.Provider>
  );
}

export default EntitiesStore;
