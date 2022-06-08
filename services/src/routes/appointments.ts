import { Router } from "express";
import AppointmentsController from "./controllers/AppointmentsController";

const router = Router();

export default router;

router.get("/", AppointmentsController.getAppointments);
