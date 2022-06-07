import AppointmentSelect from "./AppointmentSelect";
import {useContext} from "react";
import {EntitiesContext} from "../../../stores/EntitiesStore";

/**
 * Load entities for AppointmentSelect
 */
const AppointmentSelectEntities = () => {
  const entitiesContext = useContext(EntitiesContext);
  if (!entitiesContext.appointments) {
    entitiesContext.loadAppointments();
  }
  if (!entitiesContext.brokers) {
    entitiesContext.loadBrokers();
  }
  if (!entitiesContext.appointments || !entitiesContext.brokers) {
    return <span>Loading ...</span>
  }

  return <AppointmentSelect appointments={entitiesContext.appointments} brokers={entitiesContext.brokers}/>
}

export default AppointmentSelectEntities;
