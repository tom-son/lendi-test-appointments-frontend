import React, {createContext, useState} from "react";
import Appointment from "../types/Appointment";

/**
 * Global store to store states of components
 */
interface ComponentsStoreProps {
  children: React.ReactNode;
}

interface ComponentsContextProps {
  appointmentSelected: null | Appointment;
  setAppointmentSelected: (appointment: Appointment) => void;
}

export const ComponentsContext = createContext<ComponentsContextProps>({
  appointmentSelected: null,
  setAppointmentSelected: (appointment: Appointment) => {}
});

const ComponentsStore = (props: ComponentsStoreProps) => {
  const [appointmentSelected, setAppointmentSelected] = useState<null | Appointment>(null);
  const store = {
    appointmentSelected,
    setAppointmentSelected
  };
  return (
    <ComponentsContext.Provider value={store}>
      {props.children}
    </ComponentsContext.Provider>
  )
}

export default ComponentsStore;
