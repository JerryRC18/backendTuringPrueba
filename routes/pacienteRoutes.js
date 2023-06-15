import express from "express";
const router = express.Router();
import {
  agregarPaciente,
  obtenerPacientes,
  obtenerPaciente,
  actualizarPaciente,
  eliminarPaciente,
} from "../controllers/pacienteController.js";
import checkAuth from "../middleware/authMiddleware.js";
import esAdmin from "../middleware/adminMiddleware.js";

router
  .route("/")
  .post(checkAuth, esAdmin, agregarPaciente)
  .get(checkAuth, esAdmin, obtenerPacientes);

router
  .route("/:id")
  .get(checkAuth, esAdmin, obtenerPaciente)
  .put(checkAuth, esAdmin, actualizarPaciente)
  .delete(checkAuth, esAdmin, eliminarPaciente);

export default router;
