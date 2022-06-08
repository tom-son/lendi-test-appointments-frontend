import Appointment from "../../types/Appointment";
import DateUtility from "./DateUtility";

/**
 * Sort utility
 */
class SortUtility {
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

  public static sortAppointmentsByDate(appointments: Appointment[]): Appointment[] {
    return [...appointments].sort((appointmentA: Appointment, appointmentB: Appointment) => {
      return SortUtility.compareDescending(
        DateUtility.enAULocaleToDateISO(appointmentA.date),
        DateUtility.enAULocaleToDateISO(appointmentB.date))
    });
  }
}

export default SortUtility;
