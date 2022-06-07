import Broker from "../types/Broker";
import Appointment from "../types/Appointment";

interface BrokerAppointment extends Broker {
  appointments: Appointment[];
}

export default BrokerAppointment;
