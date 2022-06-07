import axios from "axios";
import Appointment from "../types/Appointment";

/**
 * Access the Appointments REST endpoints
 */
class AppointmentsHandler {
  public static async getAppointments(): Promise<Appointment[]> {
    const result = await axios.get("http://localhost:8080/appointments")
    return result.data;
  }
}

export default AppointmentsHandler;
