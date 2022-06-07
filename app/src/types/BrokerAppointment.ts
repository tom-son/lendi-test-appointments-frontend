import Broker from "./Broker";
import Appointment from "./Appointment";

interface BrokerAppointment extends Broker {
  appointments: Appointment[];
}

export default BrokerAppointment;
