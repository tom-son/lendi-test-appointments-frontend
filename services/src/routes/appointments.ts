import { Router } from "express";
import SortUtility from "../utilities/SortUtility";

const appointments = [
  { id: 1, brokerId: 1, date: "15/10/2021" },
  { id: 2, brokerId: 3, date: "22/11/2021" },
  { id: 3, brokerId: 3, date: "23/11/2021" },
  { id: 4, brokerId: 4, date: "10/5/2021" },
  { id: 5, brokerId: 3, date: "10/5/2022" },
];

const router = Router();

export default router;

router.get("/", (req, res) => {
  if (req.query.sortByDate) {
    res.send(SortUtility.sortAppointmentsByDate(appointments));
    return;
  }
  if (req.query.sortByBroker) {
    res.send(SortUtility.sortAppointmentsByBrokerIdAscending(appointments));
    return;
  }

  res.send(appointments);
});
