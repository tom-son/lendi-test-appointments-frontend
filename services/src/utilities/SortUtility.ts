import Appointment from "../../types/Appointment";
import DateUtility from "./DateUtility";
import appointment from "../../types/Appointment";

/**
 * Sort utility
 */
class SortUtility {
  private static compareAscending(a: any, b: any): number {
    if (a < b) {
      return -1;
    }
    else if (a > b) {
      return 1;
    }
    else {
      return 0;
    }
  }

  private static compareDescending(a: any, b: any): number {
    if (a < b) {
      return 1;
    }
    else if (a > b) {
      return -1;
    }
    else {
      return 0;
    }
  }

  public static sortAppointmentsByDateDescending(appointments: Appointment[]): Appointment[] {
    return [...appointments].sort((appointmentA: Appointment, appointmentB: Appointment) => {
      return SortUtility.compareDescending(
        DateUtility.enAULocaleToDateISO(appointmentA.date),
        DateUtility.enAULocaleToDateISO(appointmentB.date))
    });
  }

  static sortAppointmentsByBrokerIdAscending(appointments: Appointment[]): Appointment[] {
    return [...appointments].sort((appointmentA, appointmentB) =>
      SortUtility.compareAscending(appointmentA.brokerId, appointmentB.brokerId));
  }
}

export default SortUtility;
