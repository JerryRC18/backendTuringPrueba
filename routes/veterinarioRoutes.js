import express from "express";
const router = express.Router();
import {
  registrar,
  perfil,
  confirmar,
  autenticar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  actualizarPerfil,
  actualizarPassword,
  verificarRolAdmin,
} from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";

// área publica
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);


// Area privada
router.get("/inicio", checkAuth, perfil);
router.get("/perfil", checkAuth, perfil, verificarRolAdmin);
router.put("/perfil/:id", checkAuth, actualizarPerfil);
router.put("/actualizar-password", checkAuth, actualizarPassword);
router.get("/verificar-rol", checkAuth, verificarRolAdmin);


export default router;