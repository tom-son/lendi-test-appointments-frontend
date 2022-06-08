import express from "express";
import SortUtility from "../../utilities/SortUtility";

/**
 * Controller for Appointments
 */
const appointments = [
  { id: 1, brokerId: 1, date: "15/10/2021" },
  { id: 2, brokerId: 3, date: "22/11/2021" },
  { id: 3, brokerId: 3, date: "23/11/2021" },
  { id: 4, brokerId: 4, date: "10/5/2021" },
  { id: 5, brokerId: 3, date: "10/5/2022" },
];

interface GetAppointmentsQuery {
  sortByDate: boolean;
  sortByBroker: boolean;
}

class AppointmentsController {
  public static getAppointments(req: express.Request<{}, {}, {}, GetAppointmentsQuery>, res: express.Response)
  {
    if (req.query.sortByDate) {
      res.send(SortUtility.sortAppointmentsByDateDescending(appointments));
      return;
    }
    if (req.query.sortByBroker) {
      res.send(SortUtility.sortAppointmentsByBrokerIdAscending(appointments));
      return;
    }

    res.send(appointments);
  }
}

export default AppointmentsController;
