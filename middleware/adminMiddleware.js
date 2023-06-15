const esAdmin = (req, res, next) => {
    if (req.veterinario.rol === "admin") {
      next();
    } else {
      const error = new Error("Acceso denegado. Se requiere rol de administrador");
      res.status(403).json({ msg: error.message });
    }
  };

  export default esAdmin;